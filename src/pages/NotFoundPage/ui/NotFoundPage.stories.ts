import type { Meta, StoryObj } from '@storybook/react';

import NotFoundPage from './NotFoundPage';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK) as any],
};
