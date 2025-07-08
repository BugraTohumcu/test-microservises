/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TestToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TestToUser" DROP CONSTRAINT "_TestToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_TestToUser" DROP CONSTRAINT "_TestToUser_B_fkey";

-- DropIndex
DROP INDEX "User_name_key";

-- DropTable
DROP TABLE "Test";

-- DropTable
DROP TABLE "_TestToUser";
