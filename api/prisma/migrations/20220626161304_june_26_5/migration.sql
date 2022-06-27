/*
  Warnings:

  - A unique constraint covering the columns `[membershipId]` on the table `DestinyMemberships` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `DestinyMemberships_membershipId_key` ON `DestinyMemberships`(`membershipId`);
