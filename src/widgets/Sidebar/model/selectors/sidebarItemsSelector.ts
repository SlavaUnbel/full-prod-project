import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/sidebar';

import { userAuthDataSelector } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/routeConfig';

export const sidebarItemsSelector = createSelector(
    userAuthDataSelector,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                title: 'Main',
                Icon: MainIcon,
            },
            {
                path: getRouteAbout(),
                title: 'About us',
                Icon: AboutIcon,
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData?.id),
                    title: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    title: 'Articles',
                    Icon: ArticlesIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
