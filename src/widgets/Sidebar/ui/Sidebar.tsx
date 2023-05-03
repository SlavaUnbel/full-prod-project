import { FC, useState } from 'react';
import { LangSwitcher, ThemeSwitcher } from 'shared/ui';
import { classNames } from 'shared/lib/classNames';

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
        >
            <button type="button" onClick={handleToggle}>toggle</button>

            <div className={styles.switchers}>
                <ThemeSwitcher />

                <LangSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
