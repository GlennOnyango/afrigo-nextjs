/*
  Warnings:

  - A unique constraint covering the columns `[phoneOrEmail]` on the table `Partner` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `businessRegistrationNumber` to the `Partner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Partner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `Partner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `Partner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Partner" ADD COLUMN     "businessRegistrationNumber" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "reason" TEXT NOT NULL,
ADD COLUMN     "website" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Partner_phoneOrEmail_key" ON "Partner"("phoneOrEmail");
