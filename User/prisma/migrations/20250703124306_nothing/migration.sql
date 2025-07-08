/*
  Warnings:

  - You are about to drop the column `name` on the `test` table. All the data in the column will be lost.
  - Added the required column `t_name` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Have" DROP CONSTRAINT "Have_t_id_fkey";

-- DropForeignKey
ALTER TABLE "Have" DROP CONSTRAINT "Have_u_id_fkey";

-- AlterTable
ALTER TABLE "test" DROP COLUMN "name",
ADD COLUMN     "t_name" VARCHAR(20) NOT NULL;

-- AddForeignKey
ALTER TABLE "Have" ADD CONSTRAINT "Have_t_id_fkey" FOREIGN KEY ("t_id") REFERENCES "test"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Have" ADD CONSTRAINT "Have_u_id_fkey" FOREIGN KEY ("u_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
