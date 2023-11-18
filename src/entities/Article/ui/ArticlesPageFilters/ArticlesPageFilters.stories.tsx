import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';

import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'entities/ArticlesPageFilters',
    component: ArticlesPageFilters,
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articlesPage: {},
        }) as any,
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articlesPage: {},
        }),
        ThemeDecorator(Theme.DARK) as any,
    ],
};
