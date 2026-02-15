import { PrismaClient } from "@prisma/client";
import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const prisma = new PrismaClient();

async function generateAndSaveQrCode(referralCode, referralLink) {
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=png&data=${encodeURIComponent(referralLink)}`;
  const response = await fetch(qrApiUrl, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`QR API request failed with status ${response.status}`);
  }

  const qrBuffer = Buffer.from(await response.arrayBuffer());
  const qrDir = path.join(process.cwd(), "public", "referrals");
  await mkdir(qrDir, { recursive: true });

  const fileName = `${referralCode}.png`;
  await writeFile(path.join(qrDir, fileName), qrBuffer);
  return `/referrals/${fileName}`;
}

async function main() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.APP_URL ||
    "http://localhost:3000";

  const promoters = await prisma.promoter.findMany();

  for (const promoter of promoters) {
    const referralCode =
      promoter.referralCode ||
      createHash("sha256")
        .update(`${promoter.id}:${process.env.REFERRAL_HASH_SECRET || "afri-go-referral"}`)
        .digest("hex")
        .slice(0, 24);

    const referralLink = `${siteUrl}/r/${referralCode}`;
    const qrImageUrl = await generateAndSaveQrCode(referralCode, referralLink);

    await prisma.promoter.update({
      where: { id: promoter.id },
      data: {
        referralCode,
        referralLink,
        qrImageUrl,
      },
    });
  }

  console.log(`Seeded ${promoters.length} promoters with referral assets.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
