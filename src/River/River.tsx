import * as S from './River.styled';
import React, { FC } from 'react';

import Row from '../Row';
import { TOrientation } from './../types';

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
    <S.RiverWrapper orientation={orientation}>
      {rows.map((row, index) => (
        <Row key={index} spacing="none" orientation={orientation}>
          {row}
        </Row>
      ))}
    </S.RiverWrapper>
  );
};

export default River;
