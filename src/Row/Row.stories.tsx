import React from 'react';

import Tile from '../Tile/Tile';
import Row from './Row';

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
