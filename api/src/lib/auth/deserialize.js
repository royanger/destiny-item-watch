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
		const selectedMembershipType = await prisma.destinyMemberships.findUnique(
			{
				where: { id: user.selectedDestinyMembership },
			}
		);
		if (user && membershipTypes) {
			// console.log({
			// 	...user,
			// 	membershipTypes: [...membershipTypes],
			// 	selectedDestinyMembershipInfo: {
			// 		...selectedMembershipType,
			// 	},
			// });
			callback(null, {
				...user,
				membershipTypes: [...membershipTypes],
				selectedDestinyMembershipInfo: {
					...selectedMembershipType,
				},
			});
		} else {
			throw new Error('There was a problem deserializing the session');
		}
	});
};
