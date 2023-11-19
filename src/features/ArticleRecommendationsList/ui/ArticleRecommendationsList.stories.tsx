import type { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetailsPage: {
                recommendations: {},
            },
        }) as any,
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetailsPage: {
                recommendations: {},
            },
        }),
        ThemeDecorator(Theme.DARK) as any,
    ],
};
