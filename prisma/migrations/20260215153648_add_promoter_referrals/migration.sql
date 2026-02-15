ALTER TABLE "Promoter" RENAME COLUMN "referralHash" TO "referralCode";
ALTER TABLE "Promoter" RENAME COLUMN "qrCodeUrl" TO "qrImageUrl";

DROP INDEX IF EXISTS "Promoter_referralHash_key";

UPDATE "Promoter"
SET "referralCode" = SUBSTRING(MD5("id" || RANDOM()::TEXT), 1, 24)
WHERE "referralCode" IS NULL;

UPDATE "Promoter"
SET "referralLink" = '/r/' || "referralCode"
WHERE "referralLink" IS NULL;

UPDATE "Promoter"
SET "qrImageUrl" =
  'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' ||
  REPLACE('/r/' || "referralCode", ' ', '%20')
WHERE "qrImageUrl" IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS "Promoter_referralCode_key" ON "Promoter"("referralCode");
