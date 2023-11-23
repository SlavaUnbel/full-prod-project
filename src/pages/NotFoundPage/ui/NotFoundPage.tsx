import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Translations } from '@/shared/lib/translations/translations';
import { HStack } from '@/shared/ui';
import { Page } from '@/widgets/Page';

import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = () => {
    const { t } = useTranslation(Translations.NOT_FOUND);

    return (
        <Page className={classNames(styles.notFoundPage)} dataTestId="not-found-page">
            <HStack justify="center">
                { t('Page is not found') }
            </HStack>
        </Page>
    );
};

export default NotFoundPage;
