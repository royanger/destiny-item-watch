import { Link } from 'react-router-dom';

export function Logo() {
	return (
		<>
			<Link to="/dashboard" className="py-2 px-4">
				<h1>
					<img
						className="h-14 w-auto"
						src="/images/logo-white.png"
						alt=" Destiny Item Watch
                  "
					/>
				</h1>
			</Link>
		</>
	);
}
