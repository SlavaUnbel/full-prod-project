// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import '@/app/styles/index.scss';

import { Story } from '@storybook/react';

export const StyleDecorator = (StoryComponent: Story) => (
    <div className="app light">
        <StoryComponent />
    </div>
);
