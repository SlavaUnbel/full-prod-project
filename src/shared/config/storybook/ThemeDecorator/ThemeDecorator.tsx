import { StoryFn } from '@storybook/types';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (story: () => StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            { story() }
        </div>
    </ThemeProvider>
);
