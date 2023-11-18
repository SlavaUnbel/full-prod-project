import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook';

import { StoreProvider } from '@/app/providers/StoreProvider';
import PageError from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    args: {},
    decorators: [
        StoreProvider({}) as any,
    ],
};

export const Dark: Story = {
    decorators: [
        StoreProvider({}),
        ThemeDecorator(Theme.DARK) as any,
    ],
};
