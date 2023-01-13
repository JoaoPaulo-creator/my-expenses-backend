/*
  Warnings:

  - The primary key for the `Expenses` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Expenses_id_seq";
