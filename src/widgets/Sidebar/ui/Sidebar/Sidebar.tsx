import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button, HStack, LangSwitcher, ThemeSwitcher, VStack,
} from '@/shared/ui';
import { ButtonSize, ButtonTheme } from '@/shared/ui/Button';

import { sidebarItemsSelector } from '../../model/selectors/sidebarItemsSelector';
import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
    const sidebarItemsList = useSelector(sidebarItemsSelector);

    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            className={classNames(styles.sidebar, {
                mods: { [styles.collapsed]: collapsed },
                additional: [className],
            })}
            data-test-id="sidebar"
        >
            <Button
                onClick={handleToggle}
                data-test-id="sidebar-toggle"
                className={styles.sidebarToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                { collapsed ? '>' : '<' }
            </Button>

            <VStack gap="gap-s" role="navigation" className={styles.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>

            <HStack justify="center" className={styles.switchers}>
                <ThemeSwitcher />

                <LangSwitcher short={collapsed} />
            </HStack>
        </aside>
    );
};

export default Sidebar;
