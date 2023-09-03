import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';
import SidebarItem from './SidebarItem';

const meta: Meta<typeof SidebarItem> = {
    title: 'widget/SidebarItem',
    component: SidebarItem,
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};
