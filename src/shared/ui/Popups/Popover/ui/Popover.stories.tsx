import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';

import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Popover> = {
    title: 'shared/Popover',
    component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};
