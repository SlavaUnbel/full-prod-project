import type { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
};

export default meta;
type Story = StoryObj<typeof StarRating>;

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
