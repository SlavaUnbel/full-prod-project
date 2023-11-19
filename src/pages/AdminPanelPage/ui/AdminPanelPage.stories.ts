import type { Meta, StoryObj } from '@storybook/react';

import AdminPanelPage from './AdminPanelPage';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AdminPanelPage> = {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Light: Story = {
    args: {},
    decorators: [
        StoreDecorator({}),
    ],
};

export const Dark: Story = {
    decorators: [
        StoreDecorator({}),
        ThemeDecorator(Theme.DARK) as any,
    ],
};
