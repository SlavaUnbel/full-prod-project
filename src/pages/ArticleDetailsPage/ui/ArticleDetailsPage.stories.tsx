import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';
import ArticlePage from './ArticleDetailsPage';

const meta: Meta<typeof ArticlePage> = {
    title: 'pages/ArticlePage',
    component: ArticlePage,
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};
