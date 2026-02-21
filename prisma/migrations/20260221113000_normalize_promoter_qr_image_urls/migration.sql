UPDATE "Promoter"
SET "qrImageUrl" = '/api/referrals/qr/' || "referralCode"
WHERE "referralCode" IS NOT NULL
  AND (
    "qrImageUrl" IS NULL
    OR TRIM("qrImageUrl") = ''
    OR "qrImageUrl" LIKE 'https://api.qrserver.com/%'
    OR "qrImageUrl" LIKE 'http://api.qrserver.com/%'
    OR "qrImageUrl" NOT LIKE '/api/referrals/qr/%'
  );
