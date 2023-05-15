import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'Placeholder',
    },
};

export const WithValue: Story = {
    args: {
        placeholder: 'Placeholder',
        value: 'Value',
    },
};
