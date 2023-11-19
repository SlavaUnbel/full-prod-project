import type { Meta, StoryObj } from '@storybook/react';

import ArticleCreatePage from './ArticleCreatePage';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleCreatePage> = {
    title: 'pages/ArticleCreatePage',
    component: ArticleCreatePage,
};

export default meta;
type Story = StoryObj<typeof ArticleCreatePage>;

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
