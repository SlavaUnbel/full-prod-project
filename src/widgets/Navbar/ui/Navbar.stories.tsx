import type { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK) as any],
};
