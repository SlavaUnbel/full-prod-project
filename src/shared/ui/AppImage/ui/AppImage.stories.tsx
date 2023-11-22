import type { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';

import { StoreDecorator } from '@/shared/config/storybook';

const meta: Meta<typeof AppImage> = {
    title: 'shared/AppImage',
    component: AppImage,
};

export default meta;
type Story = StoryObj<typeof AppImage>;

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
    ],
};
