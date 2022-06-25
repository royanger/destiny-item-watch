import { ReactLocation, Router, Outlet } from '@tanstack/react-location';
// import { ReactLocationDevtools } from '@tanstack/react-location-devtools'
import { useQuery, QueryClient } from 'react-query';
import axios from 'axios';

import { Index } from './pages/Index';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

// import Tailwind and CSS
import './styles/tailwind.css';
import './styles/index.css';

const location = new ReactLocation();

// const queryClient = new QueryClient()

function App() {
   const config = {
      withCredentials: true,
      headers: {
         'Content-type': 'application/json',
      },
   };
   const { isLoading, error, data } = useQuery('auth', () =>
      fetch(`${import.meta.env.VITE_API_URL}/auth/check`, {
         credentials: 'include',
      }).then(res => res.json())
   );

   // if (isLoading) return <div>Loading...</div>;
   // if (error) {
   //    console.error('react-query', error);
   // }

   return (
      <Router
         location={location}
         routes={[
            { path: '/', element: <Index /> },
            { path: '/login', element: <Login /> },
            { path: '/dashboard', element: <Dashboard /> },
         ]}
      >
         <Outlet />
      </Router>
   );
}

export default App;
