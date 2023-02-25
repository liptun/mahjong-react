import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Tile from './Tile';

export default {
  component: Tile,
  args: { orientation: 'bottom', kind: 'bambooOne' },
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
    },
    kind: {
      control: { type: 'inline-radio' },
    },
  },
} as ComponentMeta<typeof Tile>;

const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args} />;

export const Basic = Template.bind({});
Basic.storyName = 'Basic tile';
