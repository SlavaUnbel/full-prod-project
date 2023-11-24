import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Drawer> = {
    title: 'shared/Drawer',
    component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {},
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK) as any],
};
