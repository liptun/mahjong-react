import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Tile from './Tile';

export default {
  component: Tile,
  args: { orientation: 'bottom', kind: 'bambooOne' },
  argTypes: {
    orientation: {
      options: ['left', 'right', 'bottom', 'top'],
      control: { type: 'radio' },
    },
    kind: {
      options: ['bambooOne', 'circleOne', 'characterOne'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Tile>;

const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args} />;

export const Primary = Template.bind({});
