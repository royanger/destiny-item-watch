export function Login() {
   const loginCallback = () => {
      window.open(`${import.meta.env.VITE_API_URL}/auth/bungie`, '_self');
   };

   // const loginCallbackGitHub = () => {
   //    window.open(`${import.meta.env.VITE_API_URL}/auth/github`, '_self');
   // };

   return (
      <>
         <div className="App">
            <button onClick={() => loginCallback()}>Login</button>
         </div>
         {/* <div className="App">
            <button onClick={() => loginCallbackGitHub()}>
               Login to GitHub
            </button>
         </div> */}
      </>
   );
}
