import type { Meta, StoryObj } from '@storybook/react';

import ForbiddenPage from './ForbiddenPage';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Light: Story = {
    args: {},
    decorators: [
        StoreDecorator({}),
    ],
};

export const Dark: Story = {
    decorators: [
        StoreDecorator({}),
        ThemeDecorator(Theme.DARK) as any,
    ],
};
