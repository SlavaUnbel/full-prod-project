import { isAdminPanelAvailableSelector, userActions, userAuthDataSelector } from 'entities/User';
import { loginActions, LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    AppLink, Avatar, Button, Dropdown, HStack, Text,
} from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink';
import { ButtonTheme } from 'shared/ui/Button';
import { TextTheme } from 'shared/ui/Text';

import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const authData = useSelector(userAuthDataSelector);
    const isAdminPanelAvailable = useSelector(isAdminPanelAvailableSelector);

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

    const dropdownItems = [
        ...(isAdminPanelAvailable ? [{
            content: t('Admin panel'),
            href: RoutePath['admin-panel'],
        }] : []),
        {
            content: t('Profile'),
            href: `${RoutePath.profile}${authData?.id}`,
        },
        {
            content: t('Log out'),
            onClick: handleLogout,
        },
    ];

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

                <Dropdown
                    items={dropdownItems}
                    trigger={<Avatar size={30} src={authData?.avatar} />}
                    direction="bottom left"
                    className={styles.dropdown}
                />
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
