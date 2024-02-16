import type { Meta, StoryObj } from '@storybook/react';

import Tile from './Tile';

const meta: Meta<typeof Tile> = {
  component: Tile,
};
export default meta;

type Story = StoryObj<typeof Tile>;

export const Basic: Story = {
  args: {
    kind: 'bambooOne',
    orientation: 'top',
  },
};
