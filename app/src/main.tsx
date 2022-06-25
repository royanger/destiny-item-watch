import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './lib/context/authContext';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <BrowserRouter>
         <QueryClientProvider client={queryClient}>
            <AuthProvider>
               <App />
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen={true} />
         </QueryClientProvider>
      </BrowserRouter>
   </React.StrictMode>
);
