import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '~/lib/context/authContext';
import DotSpinner from '~/components/Spinner';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const {
		loading,
		authInfo: { isAuthenticated },
	} = useAuth();
	const location = useLocation();

	if (loading)
		return (
			<div className="text-yellow-700 w-full h-screen flex justify-center items-center">
				<DotSpinner ratio={300} message="Loading" />
			</div>
		);

	if (!isAuthenticated) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};
