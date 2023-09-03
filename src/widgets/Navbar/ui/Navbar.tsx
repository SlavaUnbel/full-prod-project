import { userActions, userAuthDataSelector } from 'entities/User';
import { loginActions, LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';

import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const dispatch = useAppDispatch();

    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const authData = useSelector(userAuthDataSelector);

    const { t } = useTranslation();

    const handleOpenModal = useCallback(() => {
        setAuthModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setAuthModalOpen(false);
    }, []);

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
        dispatch(loginActions.resetState());
    }, [dispatch]);

    if (authData) {
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
                    onClick={handleLogout}
                >
                    { t('Log out') }
                </Button>
            </div>
        );
    }

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
                { t('Log in') }
            </Button>

            { isAuthModalOpen
                && (<LoginModal isOpen={isAuthModalOpen} onClose={handleCloseModal} />)}
        </div>
    );
};

export default Navbar;
