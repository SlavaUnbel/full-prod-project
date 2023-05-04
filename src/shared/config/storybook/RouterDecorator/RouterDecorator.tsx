import { StoryFn } from '@storybook/types';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => StoryFn) => <BrowserRouter>{story()}</BrowserRouter>;
