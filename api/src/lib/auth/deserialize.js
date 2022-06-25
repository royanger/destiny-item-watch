import { prisma } from '../../../prisma/db.js';

export const passportDeserialize = passport => {
   passport.deserializeUser(async (id, callback) => {
      const user = await prisma.user.findUnique({
         where: {
            membershipId: id,
         },
      });
      if (user) {
         callback(null, user);
      } else {
         throw new Error('There was a problem deserializing the session');
      }
   });
};
