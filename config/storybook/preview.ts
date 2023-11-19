import type { Preview } from '@storybook/react';

import { RouterDecorator, StyleDecorator, ThemeDecorator } from '../../src/shared/config/storybook';
import { Theme } from '../../src/shared/const/theme';

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
