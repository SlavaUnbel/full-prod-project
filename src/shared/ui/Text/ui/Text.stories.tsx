import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import Text from './Text';
import { TextTheme } from '../lib/TextTheme';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text',
    },
};

export const DarkPrimary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};

export const DarkOnlyTitle: Story = {
    args: {
        title: 'Title',
    },
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};

export const DarkOnlyText: Story = {
    args: {
        text: 'Text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK) as any,
    ],
};

export const ErrorText: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};
