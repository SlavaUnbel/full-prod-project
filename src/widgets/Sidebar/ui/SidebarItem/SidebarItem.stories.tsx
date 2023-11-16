import { Theme } from 'app/providers/ThemeProvider';
import MainIcon from 'shared/assets/icons/main.svg';
import { RoutePath } from 'shared/config/routeConfig/consts/routeConfig';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';
import SidebarItem from './SidebarItem';

const meta: Meta<typeof SidebarItem> = {
    title: 'widget/SidebarItem',
    component: SidebarItem,
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Light: Story = {
    args: {
        item: {
            path: RoutePath.main,
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
            path: RoutePath.main,
            title: 'Main',
            Icon: MainIcon,
        },
    },
    decorators: [
        StoreDecorator({}),
        ThemeDecorator(Theme.DARK) as any,
    ],
};
