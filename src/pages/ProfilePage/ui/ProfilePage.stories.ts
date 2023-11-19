import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/avatar.jpg';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 24,
                country: Country.Belarus,
                firstname: 'Слава',
                lastname: 'Левкович',
                city: 'Minsk',
                currency: Currency.BYN,
                avatar: AvatarImg,
            },
        },
    }) as any],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK), StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 24,
                    country: Country.Belarus,
                    firstname: 'Слава',
                    lastname: 'Левкович',
                    city: 'Minsk',
                    currency: Currency.BYN,
                    avatar: AvatarImg,
                },
            },
        }) as any,
    ],
};
