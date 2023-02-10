import React from 'react';
import Row from './Row';
import Tile from '../Tile/Tile';

export default {
  title: 'Row',
  component: Row,
};

export const Default = () => (
  <Row>
    <Tile kind="circleOne" />
    <Tile kind="circleOne" />
  </Row>
);
