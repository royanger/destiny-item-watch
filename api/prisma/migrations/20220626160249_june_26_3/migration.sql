/*
  Warnings:

  - You are about to drop the `DestinyMemberhips` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `DestinyMemberhips` DROP FOREIGN KEY `DestinyMemberhips_userId_fkey`;

-- DropTable
DROP TABLE `DestinyMemberhips`;

-- CreateTable
CREATE TABLE `DestinyMemberships` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `memberhipId` INTEGER NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `membershipType` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DestinyMemberships` ADD CONSTRAINT `DestinyMemberships_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
