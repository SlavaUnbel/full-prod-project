import { FC, useState } from 'react';
import { Button, LangSwitcher, ThemeSwitcher } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

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
            >
                { t(collapsed ? 'Свернуть' : 'Развернуть') }
            </Button>

            <div className={styles.switchers}>
                <ThemeSwitcher />

                <LangSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
