import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/NotificationItem',
    component: NotificationItem,
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
    args: {
        notification: {
            id: '1',
            title: 'Title',
            description: 'Description',
            userId: '1',
        },
    },
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {
        notification: {
            id: '1',
            title: 'Title',
            description: 'Description',
            userId: '1',
        },
    },
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK) as any],
};
