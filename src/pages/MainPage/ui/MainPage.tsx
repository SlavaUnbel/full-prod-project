import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Translations } from 'shared/lib/translations/translations';

const MainPage: FC = () => {
    const { t } = useTranslation(Translations.MAIN);

    return (
        <div>{ t('Main page') }</div>
    );
};

export default MainPage;
