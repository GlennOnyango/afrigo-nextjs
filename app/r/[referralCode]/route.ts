import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function getRedirectUrl(request: NextRequest) {
  const fallback = new URL("/", request.url).toString();
  const configured = normalizeConfiguredUrl(
    process.env.REFERRAL_REDIRECT_URL || process.env.NEXT_PUBLIC_SITE_URL,
  );

  return configured || fallback;
}

function normalizeConfiguredUrl(rawUrl?: string) {
  if (!rawUrl) {
    return null;
  }

  const cleaned = rawUrl.trim().replace(/^['"]|['"]$/g, "");
  if (!cleaned) {
    return null;
  }

  const withProtocol = /^https?:\/\//i.test(cleaned)
    ? cleaned
    : cleaned.startsWith("localhost") || cleaned.startsWith("127.0.0.1")
      ? `http://${cleaned}`
      : `https://${cleaned}`;

  try {
    return new URL(withProtocol).toString();
  } catch {
    return null;
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ referralCode: string }> },
) {
  const { referralCode } = await params;

  if (!referralCode) {
    return NextResponse.redirect(getRedirectUrl(request));
  }

  const promoter = await prisma.promoter.findUnique({
    where: { referralCode },
    select: { id: true },
  });

  if (!promoter) {
    return NextResponse.redirect(getRedirectUrl(request));
  }

  await prisma.promoter.update({
    where: { id: promoter.id },
    data: {
      referrals: {
        increment: 1,
      },
    },
  });

  return NextResponse.redirect(getRedirectUrl(request));
}
