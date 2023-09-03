import 'app/styles/index.scss';

import { StoryFn } from '@storybook/types';

export const StyleDecorator = (story: () => StoryFn) => <div className="app light">{story()}</div>;
