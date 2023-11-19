import type { Meta, StoryObj } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

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
