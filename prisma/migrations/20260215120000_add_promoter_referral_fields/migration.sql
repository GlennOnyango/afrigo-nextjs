-- Add referral tracking columns to promoter
ALTER TABLE "Promoter"
ADD COLUMN "referralHash" TEXT,
ADD COLUMN "referralLink" TEXT,
ADD COLUMN "qrCodeUrl" TEXT,
ADD COLUMN "referrals" INTEGER NOT NULL DEFAULT 0;

CREATE UNIQUE INDEX "Promoter_referralHash_key" ON "Promoter"("referralHash");
