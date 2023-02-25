import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Row from '../Row';
import Tile from '../Tile/Tile';
import Board from './Board';

export default {
  name: 'Board',
  component: Board,
  argTypes: {
    children: { table: { disable: true } },
  },
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <>
      <Row>
        <Tile kind="bambooOne" />
        <Tile kind="bambooTwo" />
        <Tile kind="bambooThree" />
        <Tile kind="bambooFour" />
        <Tile kind="bambooFive" />
        <Tile kind="bambooSix" />
        <Tile kind="bambooSeven" />
        <Tile kind="bambooEight" />
        <Tile kind="bambooNine" />
      </Row>
      <Row>
        <Tile kind="circleOne" />
        <Tile kind="circleTwo" />
        <Tile kind="circleThree" />
        <Tile kind="circleFour" />
        <Tile kind="circleFive" />
        <Tile kind="circleSix" />
        <Tile kind="circleSeven" />
        <Tile kind="circleEight" />
        <Tile kind="circleNine" />
      </Row>
      <Row>
        <Tile kind="characterOne" />
        <Tile kind="characterTwo" />
        <Tile kind="characterThree" />
        <Tile kind="characterFour" />
        <Tile kind="characterFive" />
        <Tile kind="characterSix" />
        <Tile kind="characterSeven" />
        <Tile kind="characterEight" />
        <Tile kind="characterNine" />
      </Row>
      <Row>
        <Tile kind="windEast"/>
        <Tile kind="windNorth"/>
        <Tile kind="windWest"/>
        <Tile kind="windSouth"/>
      </Row>
      <Row>
        <Tile kind="dragonRed"/>
        <Tile kind="dragonGreen"/>
        <Tile kind="dragonWhite"/>
      </Row>
    </>
  ),
};
Basic.storyName = "Board with all tiles"
