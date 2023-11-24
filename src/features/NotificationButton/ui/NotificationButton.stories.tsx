import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof NotificationButton> = {
    title: 'features/NotificationButton',
    component: NotificationButton,
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {},
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK) as any],
};
