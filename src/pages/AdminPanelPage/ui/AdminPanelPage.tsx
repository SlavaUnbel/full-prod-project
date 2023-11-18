import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Translations } from '@/shared/lib/translations/translations';
import { Page } from '@/widgets/Page';

const AdminPanelPage: FC = () => {
    const { t } = useTranslation(Translations.ADMIN);

    return (
        <Page>{ t('Admin page') }</Page>
    );
};

export default AdminPanelPage;
