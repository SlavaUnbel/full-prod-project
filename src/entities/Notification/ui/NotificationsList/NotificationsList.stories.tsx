import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';

import { NotificationsList } from './NotificationsList';

const meta: Meta<typeof NotificationsList> = {
    title: 'entities/NotificationsList',
    component: NotificationsList,
};

export default meta;
type Story = StoryObj<typeof NotificationsList>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({}),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        StoreDecorator({}),
        ThemeDecorator(Theme.DARK) as any,
    ],
};
