import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

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
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};
