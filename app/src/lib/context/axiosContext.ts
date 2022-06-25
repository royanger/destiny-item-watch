import React, { ReactNode } from 'react';
import { AxiosInstance } from 'axios';

const AxiosContext = React.createContext(undefined);

export type Props = {
   children: ReactNode;
   axiosInstance: AxiosInstance;
};

function AxiosProvider(props: Props) {
   const { children, axiosInstance } = props;

   return (
      <AxiosContext.Provider value={axiosInstance}>
         {children}
      </AxiosContext.Provider>
   );
}
