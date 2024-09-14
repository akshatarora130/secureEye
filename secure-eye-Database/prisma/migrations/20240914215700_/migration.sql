/*
  Warnings:

  - You are about to drop the column `location` on the `camera` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "camera" DROP COLUMN "location",
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL DEFAULT 0;
