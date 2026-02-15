/*
  Warnings:

  - Made the column `referralLink` on table `Promoter` required. This step will fail if there are existing NULL values in that column.
  - Made the column `qrImageUrl` on table `Promoter` required. This step will fail if there are existing NULL values in that column.
  - Made the column `referralCode` on table `Promoter` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Promoter" ALTER COLUMN "referralLink" SET NOT NULL,
ALTER COLUMN "qrImageUrl" SET NOT NULL,
ALTER COLUMN "referralCode" SET NOT NULL;
