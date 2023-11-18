import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook';

import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const DarkPrimary: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const DarkCircle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};
