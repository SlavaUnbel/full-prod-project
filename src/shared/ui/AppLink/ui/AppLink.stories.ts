import type { Meta, StoryObj } from '@storybook/react';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLinkTheme } from '../lib/AppLinkTheme';
import AppLink from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: RoutePath.main,
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
