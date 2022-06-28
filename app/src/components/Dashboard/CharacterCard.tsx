export const CharacterCard = ({
   charClass,
   race,
   power,
   emblemURL,
   emblemBGPath,
   emblemColor,
}: CharacterCard) => {
   return (
      <div
         className="w-[474px] h-24 relative"
         style={{
            backgroundImage: `url('https://bungie.net${emblemBGPath}')`,
            backgroundColor: `rgba(${emblemColor.red}, ${emblemColor.green}, ${emblemColor.blue}, ${emblemColor.alpha} )`,
         }}
      >
         <div className="absolute left-[90px] top-3 text-3xl">{charClass}</div>
         <p>{power}</p>
         <p>{race}</p>
      </div>
   );
};
