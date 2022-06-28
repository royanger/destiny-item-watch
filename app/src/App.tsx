import { useQuery, QueryClient } from 'react-query';
import axios from 'axios';
// import { useAuth } from './lib/context/authContext';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './lib/context/authContext';

import { Index } from './pages/Index';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Layout } from './components/Layout';
import { AddItems } from './pages/AddItems';
import { Watching } from './pages/Watching';
import { NotFound } from './pages/404';

// import Tailwind and CSS
import './styles/tailwind.css';
import './styles/index.css';
import { RequireAuth } from './components/RequireAuth';

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
		fetch(`${$API_URL}/auth/check`, {
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
			<Route
				path="/dashboard"
				element={
					<RequireAuth>
						<Layout />
					</RequireAuth>
				}
			>
				<Route index element={<Dashboard />} />
				<Route path="additems" element={<AddItems />} />
				<Route path="watching" element={<Watching />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
