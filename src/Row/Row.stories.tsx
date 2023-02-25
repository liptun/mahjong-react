import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Tile from '../Tile/Tile';
import Row from './Row';

export default {
  title: 'Row',
  component: Row,
  args: { orientation: 'bottom' },
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
    },
    spacing: {
      control: { type: 'inline-radio' },
    },
    children: { table: { disable: true } },
  },
} as ComponentMeta<typeof Row>;

type RowStory = ComponentStory<typeof Row>;
const Template: RowStory = (args) => <Row {...args} />;

export const Empty = Template.bind({});

export const WithOneTile: RowStory = Template.bind({});
WithOneTile.args = { children: <Tile kind="bambooOne" /> };

export const WithMultipleTiles: RowStory = Template.bind({});
WithMultipleTiles.args = {
  children: [
    <Tile kind="bambooOne" />,
    <Tile kind="bambooTwo" />,
    <Tile kind="bambooThree" />,
    <Tile kind="bambooFour" />,
    <Tile kind="bambooFive" />,
    <Tile kind="bambooSix" />,
  ],
};

export const WithMultipleTilesOneDiffrentOriented: RowStory = Template.bind({});
WithMultipleTilesOneDiffrentOriented.args = {
  children: [
    <Tile kind="bambooOne" />,
    <Tile kind="bambooTwo" />,
    <Tile kind="bambooThree" orientation="right" />,
    <Tile kind="bambooFour" />,
    <Tile kind="bambooFive" />,
    <Tile kind="bambooSix" />,
  ],
};
