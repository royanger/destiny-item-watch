import { LoginButton } from '~/components/Buttons/LoginButton';
import { $t } from '~/lib/i18next';

export function Index() {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<img src="images/logo.png" alt={$t('Index', 'Logo')} />
			<h1 className="text-3xl my-12">{$t('Index', 'Title')}</h1>
			<p>{$t('Index', 'Info')}</p>
			<LoginButton title={$t('Index', 'Button')} />
		</div>
	);
}
