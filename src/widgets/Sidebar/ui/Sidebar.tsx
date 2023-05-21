import { FC, useState } from 'react';
import {
    AppLink, Button, LangSwitcher, ThemeSwitcher,
} from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLinkTheme } from 'shared/ui/AppLink';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(styles.sidebar, {
                mods: { [styles.collapsed]: collapsed },
                additional: [className],
            })}
            data-testid="sidebar"
        >
            <Button
                onClick={handleToggle}
                data-testid="sidebar-toggle"
                className={styles.sidebarToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                { t(collapsed ? '>' : '<') }
            </Button>

            <div className={styles.items}>
                <div className={styles.item}>
                    <AppLink
                        to={RoutePath.main}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        <MainIcon className={styles.icon} />
                        <span className={styles.link}>
                            { t('Main') }
                        </span>
                    </AppLink>
                </div>

                <div className={styles.item}>
                    <AppLink
                        to={RoutePath.about}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        <AboutIcon className={styles.icon} />
                        <span className={styles.link}>
                            { t('About us') }
                        </span>
                    </AppLink>
                </div>
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher />

                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};

export default Sidebar;
