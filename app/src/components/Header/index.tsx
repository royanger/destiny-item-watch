import { Logo } from './Logo';
import { NavBar } from './NavBar';

export function Header() {
	return (
		<div className="flex flex-row justify-center">
			<header className="flex flex-row grow text-xl text-white max-w-[1800px]">
				<Logo />
				<NavBar />
			</header>
		</div>
	);
}
