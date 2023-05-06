import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import PageError from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};
