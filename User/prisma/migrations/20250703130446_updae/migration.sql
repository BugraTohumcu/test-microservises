/*
  Warnings:

  - You are about to drop the `Have` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Have" DROP CONSTRAINT "Have_t_id_fkey";

-- DropForeignKey
ALTER TABLE "Have" DROP CONSTRAINT "Have_u_id_fkey";

-- DropTable
DROP TABLE "Have";

-- DropTable
DROP TABLE "test";

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "t_name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TestToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_TestToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_TestToUser_B_index" ON "_TestToUser"("B");

-- AddForeignKey
ALTER TABLE "_TestToUser" ADD CONSTRAINT "_TestToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Test"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestToUser" ADD CONSTRAINT "_TestToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
