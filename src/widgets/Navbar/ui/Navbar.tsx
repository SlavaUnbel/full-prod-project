import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Modal } from 'shared/ui';

import { ButtonTheme } from 'shared/ui/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const { t } = useTranslation();

    const handleToggleModal = useCallback(() => {
        setAuthModalOpen((prev) => !prev);
    }, []);

    return (
        <div
            className={classNames(styles.navbar, {
                mods: {},
                additional: [className],
            })}
        >
            <Button
                className={styles.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={handleToggleModal}
            >
                { t('Войти') }
            </Button>

            { /* eslint-disable-next-line i18next/no-literal-string */ }
            <Modal isOpen={isAuthModalOpen} onClose={handleToggleModal}>asfhasgdj</Modal>
        </div>
    );
};

export default Navbar;
