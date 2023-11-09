import { userActions, userAuthDataSelector } from 'entities/User';
import { loginActions, LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    AppLink, Button, HStack, Text,
} from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink';
import { ButtonTheme } from 'shared/ui/Button';
import { TextTheme } from 'shared/ui/Text';

import { RoutePath } from '../../../shared/config/routeConfig/routeConfig';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const authData = useSelector(userAuthDataSelector);

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
            <HStack
                max
                role="heading"
                className={classNames(styles.navbar, {
                    mods: {},
                    additional: [className],
                })}
            >
                <Text
                    title={t('Ulbi TV App')}
                    theme={TextTheme.INVERTED}
                    className={styles.appName}
                />

                <AppLink
                    to={RoutePath['article-create']}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Create an article')}
                </AppLink>

                <Button
                    className={styles.links}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={handleLogout}
                >
                    { t('Log out') }
                </Button>
            </HStack>
        );
    }

    return (
        <HStack
            max
            role="heading"
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
        </HStack>
    );
};

export default Navbar;
