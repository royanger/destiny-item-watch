export type LoginButton = { title: string };

export const LoginButton = ({ title }: LoginButton) => {
   const loginCallback = () => {
      window.open(`${$API_URL}/auth/bungie`, '_self');
   };

   // const loginCallbackGitHub = () => {
   //    window.open(`${$API_URL}/auth/github`, '_self');
   // };

   return (
      <>
         <button
            className="py-4 px-6 bg-yellow border-0 text-black font-body font-bold text-2xl"
            onClick={() => loginCallback()}
         >
            {title}
         </button>
         {/* <div className="App">
            <button onClick={() => loginCallbackGitHub()}>
            Login to GitHub
            </button>
         </div> */}
      </>
   );
};
