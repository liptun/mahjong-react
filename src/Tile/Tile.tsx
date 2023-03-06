import React, { FC } from 'react';

import SvgBambooOne from '../Icons/BambooOne';
import { TOrientation } from '../types';
//import icons, { TIcons } from './icons';
import * as S from './Tile.styled';

interface Props {
  kind: any;
  orientation?: TOrientation;
}

const Tile: FC<Props> = ({ kind, orientation = 'bottom' }) => {
  return (
    <S.Wrapper orientation={orientation}>
        <SvgBambooOne width={50} height={50} />
    </S.Wrapper>
  );
};

export default Tile;
