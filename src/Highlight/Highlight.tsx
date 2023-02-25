import React, { FC } from 'react';

import { TOrientation } from '../types';
import * as S from './Highlight.styled';

interface Props {
  children: React.ReactElement[] | React.ReactElement;
  orientation?: TOrientation;
}

const Highlight: FC<Props> = ({ children, orientation = 'bottom' }) => {
  return (
    <S.HighlightWrapper orientation={orientation}>
      {React.Children.map(children, (child) =>
        child.props.orientation
          ? child
          : React.cloneElement(child, { orientation })
      )}
    </S.HighlightWrapper>
  );
};

export default Highlight;
