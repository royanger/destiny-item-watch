import { prisma } from 'prisma/db'

// the user row is created or updated on login using data from Bungie
export async function createOrUpdateUser(
   membershipId: string,
   displayName: string
) {
   const user = await prisma.user.upsert({
      where: {
         membershipId: membershipId,
      },
      update: {
         displayName: displayName,
      },
      create: {
         membershipId: membershipId,
         displayName: displayName,
         email: 'blank',
      },
   })

   if (!user) {
      throw new Error('failed to create or update user')
   }

   const profile = await prisma.user
      .findUnique({
         where: {
            membershipId: membershipId,
         },
      })
      .catch(e => {
         throw new Error('failed to query user')
      })
      .finally(async () => {
         await prisma.$disconnect()
      })

   if (profile) {
      return profile
   } else {
      throw new Error('failed to query new or updated user succesfully')
   }
}
