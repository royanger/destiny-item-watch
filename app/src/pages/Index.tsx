import { Link } from 'react-router-dom';
import { LoginButton } from '../components/Buttons/LoginButton';

export function Index() {
   return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
         <img src="images/logo.png" alt="Destiny Watch Logo" />
         <h1 className="text-3xl my-12">Destiny Watch</h1>
         <p>
            This landing page is a work in progress and no where near its final
            form.
         </p>
         <LoginButton />
      </div>
   );
}
