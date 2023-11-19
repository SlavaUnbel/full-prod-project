import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/avatar.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
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
};

export const Error: Story = {
    args: {
        error: 'error',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
