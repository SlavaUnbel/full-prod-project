import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Translations } from 'shared/lib/translations/translations';

const AboutPage: FC = () => {
    const { t } = useTranslation(Translations.ABOUT);

    return (
        <div>{ t('About us') }</div>
    );
};

export default AboutPage;
