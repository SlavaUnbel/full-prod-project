import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { ButtonTheme } from '../lib/ButtonTheme';
import { ButtonSize } from '../lib/ButtonSize';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const Background: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.M,
    },
};

export const Xlarge: Story = {
    args: {
        children: '>',
        size: ButtonSize.XL,
    },
};

export const Large: Story = {
    args: {
        children: '>',
        size: ButtonSize.L,
    },
};

export const Medium: Story = {
    args: {
        children: '>',
        size: ButtonSize.M,
    },
};

export const Small: Story = {
    args: {
        children: '>',
        size: ButtonSize.S,
    },
};

export const XSmall: Story = {
    args: {
        children: '>',
        size: ButtonSize.XS,
    },
};
