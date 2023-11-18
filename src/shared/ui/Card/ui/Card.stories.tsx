import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook';

import { Text } from '../../Text';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        children: <Text title="title" text="text" />,
    },
};

export const Dark: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        children: <Text title="title" text="text" />,
    },
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};
