import * as React from 'react';
import { axiosConfig as axios } from '~/lib/axios';
import md5 from 'md5';

const AuthContext = React.createContext(undefined);

type AuthProfile = {
   isAuthenticated: boolean;
   id: number;
   displayName: string | null;
   uniqueName: string | null;
};

const AuthProvider = (props: { children: React.ReactNode }) => {
   const [loading, setLoading] = React.useState(true);
   const [authInfo, setAuthInfo] = React.useState({
      isAuthenticated: false,
      // ...nullValues,
   });

   const fetch = async () => {
      try {
         const res = await axios.get(`/auth/check`);

         setAuthInfo(prevState => ({
            ...prevState,
            ...res.data.user,
         }));
         setLoading(false);
      } catch (error) {
         // const data =
         //    error?.response && error.response.data.message
         //       ? error.response.data.message
         //       : error.message;
         console.error('error', error);
      }
   };

   React.useMemo(() => {
      fetch();
   }, []);

   const logout = async () => {
      try {
         await axios.post('auth/logout');
         setAuthInfo({ isAuthenticated: false });
         window.location.href = '/login';
      } catch (error) {
         setAuthInfo({ isAuthenticated: false });
         window.location.href = '/login';
         throw new Error('There was an error completing the logout.');
      }
   };

   const contextValue = { authInfo, loading, logout };

   return <AuthContext.Provider value={contextValue} {...props} />;
};

const useAuth = () => {
   const context = React.useContext(AuthContext);
   if (!context) {
      throw new Error('useAuth must be used within a AuthProvider');
   }
   return context;
};

export { AuthProvider, useAuth };
