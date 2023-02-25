import { styled } from '@stitches/react';

import { reverseChildIndex } from '../utils';

export const RowWrapper = styled('div', {
  display: 'flex',
  padding: 10,
  paddingBottom: 30,
  variants: {
    spacing: {
      normal: {},
      none: {
        padding: 0,
      },
    },
    orientation: {
      bottom: {},
      left: {
        flexDirection: 'column',
        width: 94,
      },
      right: {
        flexDirection: 'column-reverse',
        width: 94,
        ...reverseChildIndex,
      },
      top: {
        flexDirection: 'row-reverse',
        ...reverseChildIndex,
      },
    },
  },
});
