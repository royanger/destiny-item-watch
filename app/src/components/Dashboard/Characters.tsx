import { useQuery } from 'react-query';
import { CharacterCard } from '~/components/Dashboard/CharacterCard';
import axios from 'axios';
import DotSpinner from '~/components/Spinner';

export const Characters = () => {
   const mockData = [
      {
         class: 'Warlock',
         power: 1565,
         race: 'Human',
         emblem:
            'https://www.bungie.net/common/destiny2_content/icons/3c4ead4462e910541ac5c47033ff07ac.jpg',
      },
      {
         class: 'Titan',
         power: 1567,
         race: 'Exo',
         emblem:
            'https://www.bungie.net/common/destiny2_content/icons/3c4ead4462e910541ac5c47033ff07ac.jpg',
      },
      {
         class: 'Hunter',
         power: 1560,
         race: 'Awoken',
         emblem:
            'https://www.bungie.net/common/destiny2_content/icons/3c4ead4462e910541ac5c47033ff07ac.jpg',
      },
   ];

   const config = {
      headers: {
         'X-API-Key': $BUNGIE_API_KEY,
         'Content-Type': 'application/json',
      },
   };

   const { isLoading, error, data } = useQuery(
      'membershipdata',
      () =>
         axios({
            method: 'get',
            url: `https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018481985948/?components=100`,
            headers: {
               'X-API-Key': 'f21b45a553224b5ca0144115ab49486c',
               'Content-Type': 'application/json',
            },
         })

      // fetch(
      //    `${$BUNGIE_API_ROOT}/Destiny2/3/Profile/461168601848198594/?components=100`,
      //    config
      // )
   );

   return (
      <div className="">
         <h2>Characters</h2>
         <div className="flex flex-col gap-y-14">
            {mockData.map((character, index) => (
               <CharacterCard
                  key={index}
                  charClass={character.class}
                  power={character.power}
                  race={character.race}
                  emblemURL={character.emblem}
               />
            ))}
         </div>
      </div>
   );
};
