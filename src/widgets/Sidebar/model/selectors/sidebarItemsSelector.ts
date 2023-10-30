import { createSelector } from '@reduxjs/toolkit';
import { userAuthDataSelector } from 'entities/User';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { SidebarItemType } from '../types/sidebar';

export const sidebarItemsSelector = createSelector(
    userAuthDataSelector,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: `${RoutePath.profile}${userData?.id}`,
                    title: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    title: 'Articles',
                    Icon: ArticlesIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
