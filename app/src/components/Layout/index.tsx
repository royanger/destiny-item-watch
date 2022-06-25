import { Outlet } from 'react-router-dom';
import { Header } from '../Header/';
import { useAuth } from '../../lib/context/authContext';
import { Login } from '../../pages/Login';
import DotSpinner from '../Spinner';

export const Layout = () => {
   const {
      loading,
      authInfo: { isAuthenticated },
   } = useAuth();

   if (loading)
      return (
         <div className="text-yellow-700 w-full h-screen flex justify-center items-center">
            <DotSpinner ratio={300} message="Loading" />
         </div>
      );

   return (
      <>
         <Header />

         <main>{isAuthenticated ? <Outlet /> : <Login />}</main>
      </>
   );
};
