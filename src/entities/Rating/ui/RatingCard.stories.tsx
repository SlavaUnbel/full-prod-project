import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof RatingCard> = {
    title: 'entities/RatingCard',
    component: RatingCard,
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

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
