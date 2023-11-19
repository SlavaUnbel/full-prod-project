/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

const childBlockStyles = { display: 'inline-block', padding: '20px' };

export const Row: Story = {
    args: {
        direction: 'row',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const JustifyStart: Story = {
    args: {
        justify: 'start',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const JustifyCenter: Story = {
    args: {
        justify: 'center',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const JustifyEnd: Story = {
    args: {
        justify: 'end',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const JustifyBetween: Story = {
    args: {
        justify: 'between',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const AlignStart: Story = {
    args: {
        align: 'start',
        direction: 'column',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const AlignCenter: Story = {
    args: {
        align: 'center',
        direction: 'column',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const AlignEnd: Story = {
    args: {
        align: 'end',
        direction: 'column',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const Gap3xs: Story = {
    args: {
        gap: 'gap-3xs',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const Gap2xs: Story = {
    args: {
        gap: 'gap-2xs',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const GapXs: Story = {
    args: {
        gap: 'gap-xs',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const GapS: Story = {
    args: {
        gap: 'gap-s',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const GapL: Story = {
    args: {
        gap: 'gap-l',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const GapXl: Story = {
    args: {
        gap: 'gap-xl',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const Gap2xl: Story = {
    args: {
        gap: 'gap-2xl',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const Gap3xl: Story = {
    args: {
        gap: 'gap-3xl',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const Gap4xl: Story = {
    args: {
        gap: 'gap-4xl',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};

export const Wrap: Story = {
    args: {
        wrap: 'wrap',
        children: (
            <>
                <span style={childBlockStyles}>first</span>
                <span style={childBlockStyles}>second</span>
                <span style={childBlockStyles}>third</span>
            </>
        ),
    },
};
