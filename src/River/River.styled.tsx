import { styled } from '@stitches/react';

import { reverseChildIndex } from '../utils';

export const RiverWrapper = styled('div', {
  display: 'flex',
  padding: '10px 32px 32px 10px',
  variants: {
    orientation: {
      bottom: {
        flexDirection: 'column',
      },
      left: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        ...reverseChildIndex,
      },
      right: {
        flexdirection: 'row',
      },
      top: {
        flexDirection: 'column-reverse',
        ...reverseChildIndex,
      },
    },
  },
});
