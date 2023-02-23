/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Tile from './Tile';

test('Hello', () => {
  const rendered = render(<Tile kind="bambooOne" />);
  expect(rendered.baseElement).toMatchSnapshot();
});
