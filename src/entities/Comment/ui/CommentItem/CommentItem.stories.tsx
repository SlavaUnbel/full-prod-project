import type { Meta, StoryObj } from '@storybook/react';
import { CommentItem } from './CommentItem';

const meta: Meta<typeof CommentItem> = {
    title: 'entities/CommentItem',
    component: CommentItem,
};

export default meta;
type Story = StoryObj<typeof CommentItem>;

export const Primary: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'admin',
            },
        },
    },
};

export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'admin',
            },
        },
        isLoading: true,
    },
};
