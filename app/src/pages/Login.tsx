export function Login() {
   const loginCallback = () => {
      window.open(`${import.meta.env.VITE_API_URL}/auth/bungie`, '_self');
   };

   // const loginCallbackGitHub = () => {
   //    window.open(`${import.meta.env.VITE_API_URL}/auth/github`, '_self');
   // };

   return (
      <>
         <div className=" w-full h-screen flex flex-col items-center justify-center">
            <div className="m-12">
               <img
                  className="h-36 w-auto"
                  src="/images/logo-white.png"
                  alt="Destiny Item Watch"
               />
            </div>
            <button
               className="py-4 px-6 bg-yellow border-0 text-black font-body font-bold text-2xl"
               onClick={() => loginCallback()}
            >
               Login
            </button>
            <p className="mt-12 w-1/3 text-xl">
               Destiny Item Watch requires access to some of your character and
               account information. Please log in using your Bungie account.
            </p>
         </div>
         {/* <div className="App">
            <button onClick={() => loginCallbackGitHub()}>
               Login to GitHub
            </button>
         </div> */}
      </>
   );
}
