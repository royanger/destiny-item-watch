import { Characters } from '~/components/Dashboard/Characters';

export const Dashboard = () => {
	return (
		<div className="flex flex-col grow w-full border-2 border-yellow">
			<Characters />
		</div>
	);
};
