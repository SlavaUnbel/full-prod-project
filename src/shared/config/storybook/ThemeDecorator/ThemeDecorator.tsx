import { StoryFn } from '@storybook/types';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (story: () => StoryFn) => (
    <div className={`app ${theme}`}>
        { story() }
    </div>
);
