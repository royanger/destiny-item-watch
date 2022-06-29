import { useQuery } from 'react-query';
import { CharacterCard } from '~/components/Dashboard/CharacterCard';
import axios from 'axios';
import DotSpinner from '~/components/Spinner';

export const Characters = () => {
	const config = {
		headers: {
			'X-API-Key': $BUNGIE_API_KEY,
			'Content-Type': 'application/json',
		},
	};

	// TODO
	// may need to make this authenticated for users who have not made
	// character information public
	const { isLoading: loading, error, data } = useQuery('membershipdata', () =>
		axios({
			method: 'get',
			url: `https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018481985948/?components=100,200,201,202,204,205,400,401,401,500`,
			headers: {
				'X-API-Key': 'f21b45a553224b5ca0144115ab49486c',
				'Content-Type': 'application/json',
			},
		})
	);

	if (loading)
		return <DotSpinner ratio={200} message="Loading character info..." />;

	return (
		<div className="">
			<h2>Characters</h2>
			<div className="flex flex-col gap-y-14">
				{Object.values(data?.data?.Response?.characters.data).map(
					(character: any, index: number) => (
						<CharacterCard
							key={character.characterId}
							charClass={character.classHash}
							power={character.light}
							race={character.raceHash}
							emblemURL={character.emblemPath}
							emblemBGPath={character.emblemBackgroundPath}
							emblemColor={character.emblemColor}
						/>
					)
				)}
			</div>
		</div>
	);
};
