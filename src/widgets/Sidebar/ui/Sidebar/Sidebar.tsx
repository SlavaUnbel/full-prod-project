import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, LangSwitcher, ThemeSwitcher } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { sidebarItemsList } from 'widgets/Sidebar/model/items';

import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

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
                { collapsed ? '>' : '<' }
            </Button>

            <div className={styles.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher />

                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};

export default Sidebar;
