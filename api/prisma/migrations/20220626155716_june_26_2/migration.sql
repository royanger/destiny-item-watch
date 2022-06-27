/*
  Warnings:

  - Added the required column `memberhipId` to the `DestinyMemberhips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DestinyMemberhips` ADD COLUMN `memberhipId` INTEGER NOT NULL;
