import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

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
