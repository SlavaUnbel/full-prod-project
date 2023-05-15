import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';

import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const { t } = useTranslation();

    const handleOpenModal = useCallback(() => {
        setAuthModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setAuthModalOpen(false);
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
                onClick={handleOpenModal}
            >
                { t('Войти') }
            </Button>

            <LoginModal isOpen={isAuthModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Navbar;
