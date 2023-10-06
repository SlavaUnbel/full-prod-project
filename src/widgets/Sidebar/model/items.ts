import React from 'react';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    title: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        title: 'Main',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        title: 'About us',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        title: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
    },
];
