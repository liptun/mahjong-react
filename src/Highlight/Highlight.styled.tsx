import { styled } from '@stitches/react';

import { reverseChildIndex } from '../utils';

export const HighlightWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  '&::before': {
    content: '',
    position: 'absolute',
    display: 'block',
    border: '5px solid red',
    left: -10,
    top: -10,
    right: -0,
    bottom: -0,
    borderRadius: 15,
  },
  variants: {
    orientation: {
      bottom: {
        padding: '0 24px 24px 0 ',
        margin: '0 12px 0 32px',
      },
      left: {
        flexDirection: 'column',
        padding: '0 24px 24px 0 ',
        margin: '32px 0 12px 0',
      },
      right: {
        flexDirection: 'column-reverse',
        padding: '0 24px 24px 0 ',
        margin: '32px 0 12px 0',
        ...reverseChildIndex,
      },
      top: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        padding: '0 24px 24px 0 ',
        margin: '0 12px 0 32px',
        ...reverseChildIndex,
      },
    },
  },
});
