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
            console.log(
               profile.destinyMemberships[0].applicableMembershipTypes
            );
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

            for (let i = 0; i < profile.destinyMemberships.length; i++) {
               // console.log('TEST', profile.destinyMemberships[i].membershipId);
               await prisma.destinyMemberships.upsert({
                  where: {
                     membershipId: profile.destinyMemberships[i].membershipId,
                  },
                  update: {
                     displayName: profile.destinyMemberships[i].displayName,
                  },
                  create: {
                     userId: user.id,
                     membershipId: profile.destinyMemberships[i].membershipId,
                     displayName: profile.destinyMemberships[i].displayName,
                     membershipType:
                        profile.destinyMemberships[i].membershipType,
                     logo: profile.destinyMemberships[i].iconPath,
                  },
               });
            }

            const newProfile = { ...profile, ...user };
            return done(null, newProfile);
         }
      )
   );
};
