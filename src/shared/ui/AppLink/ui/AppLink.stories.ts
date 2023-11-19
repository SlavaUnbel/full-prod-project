import type { Meta, StoryObj } from '@storybook/react';

import { AppLinkTheme } from '../lib/AppLinkTheme';

import AppLink from './AppLink';

import { getRouteMain } from '@/shared/const/routeConfig';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: getRouteMain(),
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.SECONDARY,
    },
};
