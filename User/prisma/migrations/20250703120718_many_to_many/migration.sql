/*
  Warnings:

  - You are about to drop the column `u_id` on the `test` table. All the data in the column will be lost.
  - Added the required column `name` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "test" DROP CONSTRAINT "test_u_id_fkey";

-- AlterTable
CREATE SEQUENCE test_id_seq;
ALTER TABLE "test" DROP COLUMN "u_id",
ADD COLUMN     "name" VARCHAR(20) NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('test_id_seq');
ALTER SEQUENCE test_id_seq OWNED BY "test"."id";

-- CreateTable
CREATE TABLE "Have" (
    "u_id" INTEGER NOT NULL,
    "t_id" INTEGER NOT NULL,

    CONSTRAINT "Have_pkey" PRIMARY KEY ("u_id","t_id")
);

-- AddForeignKey
ALTER TABLE "Have" ADD CONSTRAINT "Have_t_id_fkey" FOREIGN KEY ("t_id") REFERENCES "test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Have" ADD CONSTRAINT "Have_u_id_fkey" FOREIGN KEY ("u_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
