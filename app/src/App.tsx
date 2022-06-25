import { useQuery, QueryClient } from 'react-query';
import axios from 'axios';
// import { useAuth } from './lib/context/authContext';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './lib/context/authContext';

import { Index } from './pages/Index';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Layout } from './components/Layout';
import { Character } from './pages/Character';
import { Watched } from './pages/Watched';
import { NotFound } from './pages/404';

// import Tailwind and CSS
import './styles/tailwind.css';
import './styles/index.css';

function App() {
   const {
      authInfo: { isAuthenticated },
   } = useAuth();
   // const { loading } = useAuth();

   // if (loading) return <div className="loader-container">Loading...</div>;

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
      <Routes>
         <Route path="/" element={<Index />} />
         <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="character" element={<Character />} />
            <Route path="watched" element={<Watched />} />
         </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
}

export default App;
