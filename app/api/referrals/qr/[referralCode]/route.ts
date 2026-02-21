import { prisma } from "@/lib/prisma";
import {
  getReferralQrCodeObject,
  uploadReferralQrCode,
} from "@/lib/railway-bucket";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ referralCode: string }> },
) {
  const { referralCode } = await params;
  if (!referralCode) {
    return new Response("Referral code is required.", { status: 400 });
  }

  try {
    const object = await getReferralQrCodeObject(referralCode);
    if (object) {
      const payload = new Uint8Array(object.data.byteLength);
      payload.set(object.data);

      return new Response(payload, {
        status: 200,
        headers: {
          "Content-Type": object.contentType,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    // Fallback: regenerate QR dynamically when object storage is missing it.
    const promoter = await prisma.promoter.findUnique({
      where: { referralCode },
      select: { referralLink: true },
    });

    if (!promoter?.referralLink) {
      return new Response("QR code not found.", { status: 404 });
    }

    const referralLink = /^https?:\/\//i.test(promoter.referralLink)
      ? promoter.referralLink
      : new URL(promoter.referralLink, request.url).toString();
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=png&data=${encodeURIComponent(referralLink)}`;
    const generated = await fetch(qrApiUrl, { cache: "no-store" });

    if (!generated.ok) {
      return new Response("QR code not found.", { status: 404 });
    }

    const payload = new Uint8Array(await generated.arrayBuffer());

    try {
      await uploadReferralQrCode(referralCode, payload);
    } catch (uploadError) {
      console.error("Failed to cache regenerated QR code in Railway bucket.", uploadError);
    }

    return new Response(payload, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Failed to fetch QR code from Railway bucket.", error);
    return new Response("Failed to load QR code.", { status: 500 });
  }
}
