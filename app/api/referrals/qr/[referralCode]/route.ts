import { getReferralQrCodeObject } from "@/lib/railway-bucket";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ referralCode: string }> },
) {
  const { referralCode } = await params;
  if (!referralCode) {
    return new Response("Referral code is required.", { status: 400 });
  }

  try {
    const object = await getReferralQrCodeObject(referralCode);
    if (!object) {
      return new Response("QR code not found.", { status: 404 });
    }

    const payload = new Uint8Array(object.data.byteLength);
    payload.set(object.data);

    return new Response(payload, {
      status: 200,
      headers: {
        "Content-Type": object.contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Failed to fetch QR code from Railway bucket.", error);
    return new Response("Failed to load QR code.", { status: 500 });
  }
}
