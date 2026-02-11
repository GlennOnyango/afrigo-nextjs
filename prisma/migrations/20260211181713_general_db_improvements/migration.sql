/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Promoter` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Partner" ADD COLUMN     "cleared" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "website" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Promoter" ADD COLUMN     "cleared" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "wechatId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Soultions" (
    "id" TEXT NOT NULL,
    "consultingServices" TEXT NOT NULL,
    "investorService" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "wechatId" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "budgetRange" TEXT NOT NULL,
    "timeLine" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Soultions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Promoter_email_key" ON "Promoter"("email");
