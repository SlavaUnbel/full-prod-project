import type { Meta, StoryObj } from '@storybook/react';

import Loader from './Loader';

import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK) as any],
};
