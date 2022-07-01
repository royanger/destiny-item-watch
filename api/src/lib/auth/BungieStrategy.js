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

				// TODO
				// This should be replaced with a stage/prompt for the user to
				// choose which membership/platform to use with the app

				const memberships = await prisma.destinyMemberships.findMany({
					where: {
						userId: user.id,
					},
				});

				await prisma.user.update({
					where: {
						id: user.id,
					},
					data: {
						selectedDestinyMembership: memberships[0].id,
					},
				});

				const newProfile = { ...profile, ...user };
				return done(null, newProfile);
			}
		)
	);
};
