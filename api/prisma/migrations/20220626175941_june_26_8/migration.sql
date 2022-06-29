/*
  Warnings:

  - Added the required column `logo` to the `DestinyMemberships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DestinyMemberships` ADD COLUMN `logo` VARCHAR(191) NOT NULL;
