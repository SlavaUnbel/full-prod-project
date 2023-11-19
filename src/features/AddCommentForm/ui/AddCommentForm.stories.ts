import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import AddCommentForm from './AddCommentForm';

import { StoreDecorator } from '@/shared/config/storybook';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [
        StoreDecorator({}) as any,
    ],
};
