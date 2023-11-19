/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { HStack } from './HStack';

const meta: Meta<typeof HStack> = {
    title: 'shared/HStack',
    component: HStack,
};

export default meta;
type Story = StoryObj<typeof HStack>;

const childBlockStyles = { display: 'inline-block', padding: '20px' };

export const Row: Story = {
    args: {
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};
