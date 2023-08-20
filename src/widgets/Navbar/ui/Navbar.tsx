import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';
import { LoginModal, loginActions } from 'features/AuthByUsername';
import { userActions, userAuthDataSelector } from 'entities/User';

import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const dispatch = useDispatch();

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
