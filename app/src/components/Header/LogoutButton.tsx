// import { useQuery } from 'react-query';
import { Link } from '@tanstack/react-location';
export function LogoutButton() {
   // const { refetch, error, data } = useQuery(
   //    'logout',
   //    () => fetch(`https://${import.meta.env.VITE_API_URL}/auth/logout`),
   //    {
   //       refetchOnWindowFocus: false,
   //       enabled: false,
   //    }
   // );

   // const handleClick = () => {
   //    refetch();
   // };

   // if (error)
   //    return (
   //       <div>
   //          <p>There was an error:</p>
   //          <p>{error}</p>
   //       </div>
   //    );

   const logoutCallback = () => {
      window.open(`${import.meta.env.VITE_API_URL}/auth/logout`, '_self');
   };

   return (
      <div className="p-4 mr-4">
         {/* <Link to={`${import.meta.env.VITE_API_URL}/auth/logout`}> */}
         <button
            className="border-0 bg-white py-2 px-4 text-black"
            onClick={() => logoutCallback()}
         >
            Logout
         </button>
         {/* </Link> */}
      </div>
   );
}
