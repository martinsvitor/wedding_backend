/*
  Warnings:

  - You are about to drop the column `music` on the `Guest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "music",
ADD COLUMN     "songs" TEXT[];
