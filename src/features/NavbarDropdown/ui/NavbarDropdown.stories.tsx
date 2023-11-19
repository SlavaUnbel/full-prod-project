import type { Meta, StoryObj } from '@storybook/react';

import { NavbarDropdown } from './NavbarDropdown';

import AvatarImg from '@/shared/assets/avatar.jpg';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

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
