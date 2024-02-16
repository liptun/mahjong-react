import { styled } from '@stitches/react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import * as Icons from '.';

const meta: Meta = {
  title: 'Iconography',
};

export default meta;

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
});
const IconWrapper = styled('div', {
  width: 200,
});

export const Iconography: StoryObj = {
  render: () => (
    <Grid>
      {Object.entries(Icons).map(([title, Icon]) => (
        <IconWrapper>
          <Icon viewBox="0 0 139.764 200" />
          <p>{title}</p>
        </IconWrapper>
      ))}
    </Grid>
  ),
};
