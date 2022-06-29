export function LogoutButton() {
	const logoutCallback = () => {
		window.open(`${$API_URL}/auth/logout`, '_self');
	};

	return (
		<div className="p-4 mr-4">
			{/* <Link to={`${$API_URL}/auth/logout`}> */}
			<button
				className="border-0 bg-white py-2 px-4 text-black"
				onClick={() => logoutCallback()}
			>
				Logout
			</button>
			{/* </Link> */}
		</div>
	);
}
