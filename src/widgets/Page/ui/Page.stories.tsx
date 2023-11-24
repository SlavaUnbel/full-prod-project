import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Page> = {
    title: 'widget/Page',
    component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {},
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK) as any],
};
