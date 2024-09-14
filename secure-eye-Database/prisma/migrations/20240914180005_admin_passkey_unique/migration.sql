/*
  Warnings:

  - A unique constraint covering the columns `[passkey]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Admin_passkey_key" ON "Admin"("passkey");
