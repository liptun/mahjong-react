import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import River from '../River';
import Row from '../Row';
import Tile from '../Tile/Tile';
import Highlight from './Highlight';

export default {
  name: 'Highligh',
  component: Row,
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
    },
    children: { table: { disable: true } },
  },
} as ComponentMeta<typeof Highlight>;

export const InRowWithOneTile = (args: ComponentStory<typeof Row>) => (
  <Row {...args}>
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
    <Highlight>
      <Tile kind="bambooOne" />
    </Highlight>
    <Tile kind="bambooOne" />
  </Row>
);

export const InRowWithMultipleTiles = (args: ComponentStory<typeof Row>) => (
  <Row {...args}>
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
    <Highlight>
      <Tile kind="bambooOne" />
      <Tile kind="bambooOne" />
      <Tile kind="bambooOne" />
    </Highlight>
    <Tile kind="bambooOne" />
  </Row>
);

export const InRiverWithOneTile = (args: ComponentStory<typeof River>) => (
  <River {...args}>
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
    <Highlight>
      <Tile kind="bambooOne" />
    </Highlight>
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
  </River>
);
export const InRiverWithMultipleTiles = (
  args: ComponentStory<typeof River>
) => (
  <River {...args}>
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
    <Highlight>
      <Tile kind="bambooOne" />
      <Tile kind="bambooOne" />
      <Tile kind="bambooOne" />
    </Highlight>
    <Tile kind="bambooOne" />
    <Tile kind="bambooOne" />
  </River>
);
