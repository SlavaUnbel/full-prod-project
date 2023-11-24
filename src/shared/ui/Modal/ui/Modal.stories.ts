import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        children: 'Text',
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        children: 'Text',
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.DARK) as any],
};
