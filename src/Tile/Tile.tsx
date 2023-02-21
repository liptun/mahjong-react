import React, { FC } from 'react';
import { TKind, TOrientation } from '../types';

import icons, { TIcons } from './icons';

import * as S from './Tile.styled';

interface Props {
  kind: keyof TIcons;
  orientation?: TOrientation;
}

const Kind: FC<Props> = ({ kind, orientation = 'bottom' }) => {
  return (
    <S.Wrapper orientation={orientation}>
      <S.Vector src={icons[kind]} />
    </S.Wrapper>
  );
};

export default Kind;
