import { StoryFn } from '@storybook/types';
import 'app/styles/index.scss';

export const StyleDecorator = (story: () => StoryFn) => <div className="app light">{story()}</div>;
