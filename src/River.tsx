import React, { FC } from 'react';
import { styled } from '@stitches/react';

import Row, { reverseChildIndex } from './Row';
import { TOrientation } from './types';

const RiverWrapper = styled('div', {
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

interface Props {
  children: React.ReactElement[] | React.ReactElement;
  orientation?: TOrientation;
}

const River: FC<Props> = ({ children, orientation = 'bottom' }) => {
  const mappedChildren = React.Children.map(children, (child) => {
    if (child.props.orientation) {
      return child;
    } else {
      return React.cloneElement(child, { orientation });
    }
  });
  let rows = [mappedChildren.splice(0, 6)];
  const chunkSize = 6;
  for (let i = 0; i < mappedChildren.length; i + chunkSize) {
    rows = [...rows, mappedChildren.splice(0, 6)];
  }

  return (
    <RiverWrapper orientation={orientation}>
      {rows.map((row, index) => (
        <Row key={index} spacing="none" orientation={orientation}>
          {row}
        </Row>
      ))}
    </RiverWrapper>
  );
};

export default River;
