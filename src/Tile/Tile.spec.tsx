/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import React from 'react';

import Tile from './Tile';

test('Hello', () => {
  const rendered = render(<Tile kind="bambooOne" />);
  expect(rendered.baseElement).toMatchSnapshot();
});
