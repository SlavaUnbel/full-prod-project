import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Translations } from '@/shared/lib/translations/translations';
import { Page } from '@/widgets/Page';

const AboutPage: FC = () => {
    const { t } = useTranslation(Translations.ABOUT);

    return <Page dataTestId="about-page">{t('About us')}</Page>;
};

export default AboutPage;
