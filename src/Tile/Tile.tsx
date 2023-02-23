import * as S from './Tile.styled';
import React, { FC } from 'react';
import icons, { TIcons } from './icons';
import { TOrientation } from '../types';

interface Props {
  kind: keyof TIcons;
  orientation?: TOrientation;
}

const Tile: FC<Props> = ({ kind, orientation = 'bottom' }) => {
  return (
    <S.Wrapper orientation={orientation}>
      <S.Vector src={icons[kind]} />
    </S.Wrapper>
  );
};

export default Tile;
