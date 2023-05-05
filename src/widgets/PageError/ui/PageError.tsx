import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';

import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const handleReloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div
            className={classNames(styles.pageError, {
                mods: {},
                additional: [className],
            })}
        >
            { t('Произошла непредвиденная ошибка') }

            <Button
                onClick={handleReloadPage}
            >
                { t('Обновить страницу') }
            </Button>
        </div>
    );
};

export default PageError;
