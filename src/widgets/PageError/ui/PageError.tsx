import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';

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
            { t('An unexpected error occured') }

            <Button
                onClick={handleReloadPage}
            >
                { t('Refresh the page') }
            </Button>
        </div>
    );
};

export default PageError;
