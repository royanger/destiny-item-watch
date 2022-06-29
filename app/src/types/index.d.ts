type NavItem = {
	name: string;
	link: string;
};

type LoginButton = { title: string };

type CharacterCard = {
	charClass: number;
	power: number;
	race: number;
	emblemURL: string;
	emblemBGPath: string;
	emblemColor: {
		red: number;
		green: number;
		blue: number;
		alpha: number;
	};
};

type AuthContextValue = {
	isAuthenticated: boolean;
	loading: boolean;
};
// { authInfo: { isAuthenticated: boolean; }; loading: boolean; logout: () => Promise<void>; }
