import BungieStrategy from 'passport-bungie';
import { prisma } from '../../../prisma/db.js';

export const passportBungie = async passport => {
   passport.use(
      new BungieStrategy(
         {
            clientID: process.env.BUNGIE_ID,
            clientSecret: process.env.BUNGIE_SECRET,
            callbackURL: process.env.BUNGIE_CALLBACK,
            customHeaders: { 'X-API-KEY': process.env.BUNGIE_APIKEY },
         },
         async function (accessToken, refreshToken, profile, done) {
            const user = await prisma.user.upsert({
               where: { membershipId: profile.membershipId },
               update: {
                  uniqueName: profile.uniqueName,
                  displayName: profile.displayName,
               },
               create: {
                  membershipId: profile.membershipId,
                  uniqueName: profile.uniqueName,
                  displayName: profile.displayName,
               },
            });

            // don't really need this, but keeping it here for when/if I test
            // with a different passport strategy
            user.provider = 'bungie';
            return done(null, user);
         }
      )
   );
};
