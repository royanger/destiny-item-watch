/*
  Warnings:

  - Added the required column `uniqueName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `uniqueName` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NULL;
