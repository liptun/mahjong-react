/**
 * @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import Tile from './Tile';

test('Hello', () => {
  render(<Tile kind="bambooOne" />);
});
