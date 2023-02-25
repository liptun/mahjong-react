import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import River from '../River';
import Tile from '../Tile/Tile';

export default {
  title: 'River',
  component: River,
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
    },
    children: { table: { disable: true } },
  },
} as ComponentMeta<typeof River>;

const Template: ComponentStory<typeof River> = (args) => <River {...args} />;

export const Empty = Template.bind({});

export const WithOneTile = Template.bind({});
WithOneTile.args = { children: <Tile kind="bambooOne" /> };

export const WithMultipleTiles = Template.bind({});
WithMultipleTiles.args = {
  children: [
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
  ],
};

export const WithMultipleTilesWithTileOriented = Template.bind({});
WithMultipleTilesWithTileOriented.args = {
  children: [
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" orientation="right" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
    <Tile kind="bambooOne" />,
  ],
};
