import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook';

import { ArticleViewToggle } from './ArticleViewToggle';

const meta: Meta<typeof ArticleViewToggle> = {
    title: 'entities/ArticleViewToggle',
    component: ArticleViewToggle,
};

export default meta;
type Story = StoryObj<typeof ArticleViewToggle>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};
