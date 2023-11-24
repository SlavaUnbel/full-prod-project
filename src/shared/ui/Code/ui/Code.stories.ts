import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';

import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    args: {
        text:
            'export default {\n' +
            "    title: 'shared/Code',\n" +
            '    component: Code,\n' +
            '    argTypes: {\n' +
            "        backgroundColor: { control: 'color' },\n" +
            '    },\n' +
            '} as ComponentMeta<typeof Code>;\n' +
            '\n' +
            'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
            '\n' +
            'export const Normal = Template.bind({});',
    },
};

export const Dark: Story = {
    args: {
        text:
            'export default {\n' +
            "    title: 'shared/Code',\n" +
            '    component: Code,\n' +
            '    argTypes: {\n' +
            "        backgroundColor: { control: 'color' },\n" +
            '    },\n' +
            '} as ComponentMeta<typeof Code>;\n' +
            '\n' +
            'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
            '\n' +
            'export const Normal = Template.bind({});',
    },
    decorators: [ThemeDecorator(Theme.DARK) as any],
};
