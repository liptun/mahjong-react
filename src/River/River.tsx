import React, { FC } from 'react';

import Row from '../Row';
import { TOrientation } from './../types';
import * as S from './River.styled';

interface Props {
  children?: React.ReactElement[] | React.ReactElement;
  orientation?: TOrientation;
}

const River: FC<Props> = ({ children, orientation = 'bottom' }) => {
  const chunkSize = 6;
  const mappedChildren = React.Children.map(children, (child) =>
    child
      ? child.props.orientation
        ? child
        : React.cloneElement(child, { orientation })
      : null
  );

  if (!mappedChildren) {
    return null;
  }

  let rows = [mappedChildren.splice(0, 6)];
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
