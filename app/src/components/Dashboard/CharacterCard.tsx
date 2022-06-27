export const CharacterCard = ({
   charClass,
   race,
   power,
   emblemURL,
}: CharacterCard) => {
   return (
      <div
         className="w-[30rem] h-24 relative"
         style={{ backgroundImage: `url(${emblemURL})` }}
      >
         <div className="absolute left-[90px] top-3 text-3xl">{charClass}</div>
         <p>{power}</p>
         <p>{race}</p>
      </div>
   );
};
