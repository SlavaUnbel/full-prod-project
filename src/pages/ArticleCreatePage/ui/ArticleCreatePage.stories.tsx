import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';
import ArticleCreatePage from './ArticleCreatePage';

const meta: Meta<typeof ArticleCreatePage> = {
    title: 'pages/ArticleCreatePage',
    component: ArticleCreatePage,
};

export default meta;
type Story = StoryObj<typeof ArticleCreatePage>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};
