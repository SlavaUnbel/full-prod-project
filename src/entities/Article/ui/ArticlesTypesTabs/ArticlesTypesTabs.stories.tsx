import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesTypesTabs } from './ArticlesTypesTabs';

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
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};
