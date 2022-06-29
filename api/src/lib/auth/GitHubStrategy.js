import GitHubStrategy from 'passport-github2';
import { prisma } from '../../../prisma/db.js';

export const passportGitHub = async passport => {
   passport.use(
      new GitHubStrategy(
         {
            clientID: process.env.GITHUB_CLIENT_ID2,
            clientSecret: process.env.GITHUB_CLIENT_SECRET2,
            callbackURL: process.env.GITHUB_CALLBACK_URL2,
         },
         async function (accessToken, refreshToken, profile, done) {
            const user = await prisma.user.upsert({
               where: { membershipId: profile.id },
               update: {
                  uniqueName: profile.username,
                  displayName: profile.displayName,
               },
               create: {
                  membershipId: profile.id,
                  uniqueName: profile.username,
                  displayName: profile.displayName,
               },
            });
            return done(null, profile);
         }
      )
   );
};
