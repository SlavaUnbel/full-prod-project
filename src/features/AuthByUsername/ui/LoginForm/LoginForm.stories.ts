import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';

import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({ login: { username: 'admin', password: 'admin' } }) as any,
    ],
};

export const Error: Story = {
    decorators: [
        StoreDecorator({ login: { username: 'admin', password: 'admin', error: 'error' } }) as any,
    ],
};

export const Loading: Story = {
    decorators: [
        StoreDecorator({ login: { username: 'admin', password: 'admin', isLoading: true } }) as any,
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
        StoreDecorator({ login: { username: 'admin', password: 'admin' } }) as any,
    ],
};
