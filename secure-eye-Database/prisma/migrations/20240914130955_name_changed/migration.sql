-- CreateTable
CREATE TABLE "camera" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "serialNo" TEXT NOT NULL,
    "range" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "sharing" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "camera_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "camera" ADD CONSTRAINT "camera_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
