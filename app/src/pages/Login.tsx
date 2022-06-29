import { LoginButton } from '~/components/Buttons/LoginButton';

export function Login() {
	return (
		<>
			<div className=" w-full h-screen flex flex-col items-center justify-center">
				<div className="m-12">
					<img
						className="h-36 w-auto"
						src="/images/logo-white.png"
						alt="Destiny Item Watch"
					/>
				</div>
				<LoginButton title="Login" />
				<p className="mt-12 w-1/3 text-xl">
					Destiny Item Watch requires access to some of your character and
					account information. Please log in using your Bungie account.
				</p>
			</div>
		</>
	);
}
