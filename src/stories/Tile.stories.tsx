import type { Meta, StoryObj } from '@storybook/react';

import { Tile } from './Tile';

const meta: Meta<typeof Tile> = {
    title: 'Bug/Tile',
    component: Tile,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Tile>;

export const DefaultWorking: Story = {
    render: args => {
        return <Tile {...args} />
    },
    args: {
        content: {
            title: 'Title',
            message: 'Message'
        }
    }
};

export const NotWorking: Story = {
    render: args => {
        return <Tile {...args} />
    },
    args: {}
};
