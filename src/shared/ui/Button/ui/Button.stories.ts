import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { ThemeButton } from '../lib/ThemeButton';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
        primary: true,
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

export const Large: Story = {
    args: {
        children: 'Text',
        size: 'large',
    },
};

export const Small: Story = {
    args: {
        children: 'Text',
        size: 'small',
    },
};
