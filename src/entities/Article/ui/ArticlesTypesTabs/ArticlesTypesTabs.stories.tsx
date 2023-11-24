import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesTypesTabs } from './ArticlesTypesTabs';

import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticlesTypesTabs> = {
    title: 'entities/ArticlesTypesTabs',
    component: ArticlesTypesTabs,
};

export default meta;
type Story = StoryObj<typeof ArticlesTypesTabs>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK) as any],
};
