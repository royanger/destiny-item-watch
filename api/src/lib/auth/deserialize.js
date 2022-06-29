import { prisma } from '../../../prisma/db.js';

export const passportDeserialize = passport => {
   passport.deserializeUser(async (id, callback) => {
      const user = await prisma.user.findUnique({
         where: {
            membershipId: id,
         },
      });
      const membershipTypes = await prisma.destinyMemberships.findMany({
         where: {
            userId: user.id,
         },
      });
      if (user && membershipTypes) {
         callback(null, { ...user, membershipTypes: [...membershipTypes] });
      } else {
         throw new Error('There was a problem deserializing the session');
      }
   });
};
