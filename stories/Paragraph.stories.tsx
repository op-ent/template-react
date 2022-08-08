import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Paragraph } from '../src'
import type { ParagraphProps } from '../src'

const meta: Meta = {
    title: 'Welcome',
    component: Paragraph,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
}

export default meta

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {
    children: 'Hello Paragraph',
}
