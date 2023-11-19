import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import AvatarImg from '@/shared/assets/avatar.jpg';

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
        StoreDecorator({
            user: {
                authData: {
                    avatar: AvatarImg,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    avatar: AvatarImg,
                },
            },
        }),
        ThemeDecorator(Theme.DARK) as any,
    ],
};
