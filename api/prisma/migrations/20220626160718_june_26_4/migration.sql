/*
  Warnings:

  - You are about to drop the column `memberhipId` on the `DestinyMemberships` table. All the data in the column will be lost.
  - Added the required column `membershipId` to the `DestinyMemberships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DestinyMemberships` DROP COLUMN `memberhipId`,
    ADD COLUMN `membershipId` INTEGER NOT NULL;
