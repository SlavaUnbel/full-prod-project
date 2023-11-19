import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Label',
        options: [
            {
                value: '123',
                content: 'Content1',
            },
            {
                value: '234',
                content: 'Content2',
            },
        ],
    },
};
