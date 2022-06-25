import { Link } from '@tanstack/react-location';

export function Index() {
   return (
      <div className="App">
         <img src="images/logo.png" alt="Destiny Watch Logo" />
         Destiny Watch
         <Link to="/login">
            <button>Login</button>
         </Link>
      </div>
   );
}
