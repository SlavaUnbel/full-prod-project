import { classNames } from 'shared/lib/classNames/classNames';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = () => {
    const { t } = useTranslation('notFound');

    return (
        <div className={classNames(styles.notFoundPage)}>
            { t('Страница не найдена') }
        </div>
    );
};

export default NotFoundPage;
