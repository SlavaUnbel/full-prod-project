import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'pages/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

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
