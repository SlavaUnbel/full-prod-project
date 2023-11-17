import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';
import { NavbarDropdown } from './NavbarDropdown';

const meta: Meta<typeof NavbarDropdown> = {
    title: 'features/NavbarDropdown',
    component: NavbarDropdown,
};

export default meta;
type Story = StoryObj<typeof NavbarDropdown>;

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
