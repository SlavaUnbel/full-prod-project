import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Translations } from 'shared/lib/translations/translations';

import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = () => {
    const { t } = useTranslation(Translations.NOT_FOUND);

    return (
        <div className={classNames(styles.notFoundPage)}>
            { t('Page is not found') }
        </div>
    );
};

export default NotFoundPage;
