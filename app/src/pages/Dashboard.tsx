import * as React from 'react';
import { Header } from '../components/Header/';
import axios from 'axios';
import { useAuth } from '../lib/context/authContext';

export const Dashboard = () => {
   const [user, setUser] = React.useState({});

   React.useEffect(() => {
      const config = {
         withCredentials: true,
         headers: {
            'Content-type': 'application/json',
         },
      };

      axios(`${import.meta.env.VITE_API_URL}/auth/check`, config);
      // setUser(res);
   }, []);

   return (
      <>
         <p>Hi there</p>
      </>
   );
};
