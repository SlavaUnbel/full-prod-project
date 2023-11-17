import { userAuthDataSelector } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/consts/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    AppLink, Button, HStack, Text,
} from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink';
import { ButtonTheme } from 'shared/ui/Button';
import { TextTheme } from 'shared/ui/Text';

import { NotificationButton } from 'features/NotificationButton';
import { NavbarDropdown } from 'features/NavbarDropdown';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const authData = useSelector(userAuthDataSelector);

    const handleOpenModal = useCallback(() => {
        setAuthModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setAuthModalOpen(false);
    }, []);

    const renderContent = () => {
        if (authData) {
            return (
                <>
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

                    <HStack gap="gap-m" className={styles.actions}>
                        <NotificationButton />

                        <NavbarDropdown />
                    </HStack>
                </>
            );
        }

        return (
            <>
                <Button
                    className={styles.links}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={handleOpenModal}
                >
                    { t('Log in') }
                </Button>

                { isAuthModalOpen
                    && (<LoginModal isOpen={isAuthModalOpen} onClose={handleCloseModal} />)}
            </>
        );
    };

    return (
        <HStack
            max
            role="heading"
            className={classNames(styles.navbar, { additional: [className] })}
        >
            {renderContent()}
        </HStack>
    );
};

export default Navbar;
