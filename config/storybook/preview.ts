import type { Preview } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
    RouterDecorator,
    StyleDecorator,
    ThemeDecorator,
} from 'shared/config/storybook';

export const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export const decorators = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
];
