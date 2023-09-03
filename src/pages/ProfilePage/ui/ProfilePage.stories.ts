import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {},
    decorators: [StoreDecorator({}) as any],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK) as any, StoreDecorator({}),
    ],
};
