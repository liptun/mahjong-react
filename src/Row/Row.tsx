import React, { FC } from 'react';

import { TOrientation } from '../types';
import * as S from './Row.styled';

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
    <S.RowWrapper orientation={orientation} spacing={spacing}>
      {React.Children.map(children, (child) =>
        child.props.orientation
          ? child
          : React.cloneElement(child, { orientation })
      )}
    </S.RowWrapper>
  );
};

export default Row;
