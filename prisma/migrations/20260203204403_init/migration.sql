-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('CHINESE_BUSINESS', 'KENYAN_BUSINESS', 'SERVICE_PARTNER', 'OTHER');

-- CreateEnum
CREATE TYPE "QuoteNeed" AS ENUM ('LOGISTICS', 'STAFFING', 'WAREHOUSING', 'OFFICE_SPACE', 'LEGAL_SUPPORT', 'TRANSACTION');

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "weChatId" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "entityType" "EntityType" NOT NULL,
    "additionalRequirements" TEXT,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "phoneOrEmail" TEXT NOT NULL,
    "businessCategory" TEXT NOT NULL,
    "yearsInOperation" INTEGER NOT NULL,
    "servicesOffered" TEXT NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Promoter" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "weChatId" TEXT,
    "promotePlan" TEXT NOT NULL,

    CONSTRAINT "Promoter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "serviceName" TEXT NOT NULL,
    "serviceDescription" TEXT NOT NULL,
    "actionText" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceItem" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "serviceItem" TEXT NOT NULL,

    CONSTRAINT "ServiceItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quote" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "weChatId" TEXT NOT NULL,
    "companyName" TEXT,
    "industry" TEXT NOT NULL,
    "needs" "QuoteNeed" NOT NULL,
    "expectedEntryDate" TIMESTAMP(3) NOT NULL,
    "additionalRequirements" TEXT,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServiceItem" ADD CONSTRAINT "ServiceItem_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
