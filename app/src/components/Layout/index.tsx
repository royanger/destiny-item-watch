import { Outlet } from 'react-router-dom';
import { Header } from '~/components/Header/';

export const Layout = () => {
   return (
      <>
         <Header />
         <main className="flex flew-row justify-center">
            <div className="max-w-[1440px] grow">
               <Outlet />
            </div>
         </main>
      </>
   );
};
