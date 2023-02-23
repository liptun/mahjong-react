import { styled } from '@stitches/react';
import React, { FC } from 'react';

import { TOrientation } from '../types';


export const reverseChildIndex = {
  '& > div:nth-child(1)': { zIndex: 17 },
  '& > div:nth-child(2)': { zIndex: 16 },
  '& > div:nth-child(3)': { zIndex: 15 },
  '& > div:nth-child(4)': { zIndex: 14 },
  '& > div:nth-child(5)': { zIndex: 13 },
  '& > div:nth-child(6)': { zIndex: 12 },
  '& > div:nth-child(7)': { zIndex: 11 },
  '& > div:nth-child(8)': { zIndex: 10 },
  '& > div:nth-child(9)': { zIndex: 9 },
  '& > div:nth-child(10)': { zIndex: 8 },
  '& > div:nth-child(11)': { zIndex: 7 },
  '& > div:nth-child(12)': { zIndex: 6 },
  '& > div:nth-child(13)': { zIndex: 5 },
  '& > div:nth-child(14)': { zIndex: 4 },
  '& > div:nth-child(15)': { zIndex: 3 },
  '& > div:nth-child(16)': { zIndex: 2 },
  '& > div:nth-child(17)': { zIndex: 1 },
};

const RowWrapper = styled('div', {
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

interface Props {
  children: React.ReactElement[] | React.ReactElement;
  orientation?: TOrientation;
  spacing?: 'none' | 'normal';
}

const Row: FC<Props> = ({
  children,
  orientation = 'bottom',
  spacing = 'normal',
}) => {
  return (
    <RowWrapper orientation={orientation} spacing={spacing}>
      {React.Children.map(children, (child) => {
        if (child.props.orientation) {
          return child;
        } else {
          return React.cloneElement(child, { orientation });
        }
      })}
    </RowWrapper>
  );
};

export default Row;
