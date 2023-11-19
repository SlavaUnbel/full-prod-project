import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { loginActions } from '../../AuthByUsername';

import { isAdminPanelAvailableSelector, userActions, userAuthDataSelector } from '@/entities/User';
import { RoutePath } from '@/shared/const/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar, Dropdown } from '@/shared/ui';

interface NavbarDropdownProps {
    className?: string;
}

export const NavbarDropdown: FC<NavbarDropdownProps> = memo(({
    className,
}: NavbarDropdownProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const authData = useSelector(userAuthDataSelector);
    const isAdminPanelAvailable = useSelector(isAdminPanelAvailableSelector);

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

    return (
        <Dropdown
            className={classNames('', { additional: [className] })}
            items={dropdownItems}
            trigger={<Avatar size={30} src={authData?.avatar} />}
            direction="bottom left"
        />
    );
});
