/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { VStack } from './VStack';

const meta: Meta<typeof VStack> = {
    title: 'shared/VStack',
    component: VStack,
};

export default meta;
type Story = StoryObj<typeof VStack>;

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
