import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewToggle } from './ArticleViewToggle';

import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

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
    decorators: [ThemeDecorator(Theme.DARK) as any],
};
