import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';

import { useSelector } from 'react-redux';
import { userAuthDataSelector } from 'entities/User';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

const Sidebar: FC<SidebarItemProps> = memo(({
    item: {
        path, title, Icon, authOnly,
    },
    collapsed,
}: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(userAuthDataSelector);

    if (authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(styles.item, {
                mods: { [styles.collapsed]: collapsed },
                additional: [],
            })}
        >
            <Icon className={styles.icon} />
            <span className={styles.link}>
                { t(title) }
            </span>
        </AppLink>
    );
});

export default Sidebar;
