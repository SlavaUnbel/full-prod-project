import type { Meta, StoryObj } from '@storybook/react';

import SidebarItem from './SidebarItem';

import MainIcon from '@/shared/assets/icons/main.svg';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { getRouteMain } from '@/shared/const/routeConfig';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof SidebarItem> = {
    title: 'widget/SidebarItem',
    component: SidebarItem,
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Light: Story = {
    args: {
        item: {
            path: getRouteMain(),
            title: 'Main',
            Icon: MainIcon,
        },
    },
    decorators: [
        StoreDecorator({}),
    ],
};

export const Dark: Story = {
    args: {
        item: {
            path: getRouteMain(),
            title: 'Main',
            Icon: MainIcon,
        },
    },
    decorators: [
        StoreDecorator({}),
        ThemeDecorator(Theme.DARK) as any,
    ],
};
