import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Translations } from '@/shared/lib/translations/translations';
import { Page } from '@/widgets/Page';

const MainPage: FC = () => {
    const { t } = useTranslation(Translations.MAIN);

    return <Page dataTestId="main-page">{t('Main page')}</Page>;
};

export default MainPage;
