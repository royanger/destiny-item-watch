import { useTranslation } from 'react-i18next';

export const $t = (page: string, key: string) => {
	const { t, i18n } = useTranslation('translation', { keyPrefix: page });
	return t(key);
};
