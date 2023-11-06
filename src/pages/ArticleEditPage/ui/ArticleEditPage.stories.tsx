import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};
