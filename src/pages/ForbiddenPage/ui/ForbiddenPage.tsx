import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Translations } from '@/shared/lib/translations/translations';
import { Page } from '@/widgets/Page';

const ForbiddenPage: FC = () => {
    const { t } = useTranslation(Translations.FORBIDDEN);

    return <Page>{t('You do not have access to this page')}</Page>;
};

export default ForbiddenPage;
