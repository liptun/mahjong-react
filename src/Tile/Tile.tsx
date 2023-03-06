import React, { FC } from 'react';

import * as Icon from '../Icons';
import { Kind, Orientation } from '../types';
import * as S from './Tile.styled';

interface Props {
  kind: Kind;
  orientation?: Orientation;
}

const viewBox = '0 0 139.764 200';

const Tile: FC<Props> = ({ kind, orientation = 'bottom' }) => {
  return (
    <S.Wrapper orientation={orientation}>
      {kind === 'bambooOne' && <Icon.BambooOne viewBox={viewBox} />}
      {kind === 'bambooTwo' && <Icon.BambooTwo viewBox={viewBox} />}
      {kind === 'bambooThree' && <Icon.BambooThree viewBox={viewBox} />}
      {kind === 'bambooFour' && <Icon.BambooFour viewBox={viewBox} />}
      {kind === 'bambooFive' && <Icon.BambooFive viewBox={viewBox} />}
      {kind === 'bambooSix' && <Icon.BambooSix viewBox={viewBox} />}
      {kind === 'bambooSeven' && <Icon.BambooSeven viewBox={viewBox} />}
      {kind === 'bambooEight' && <Icon.BambooEight viewBox={viewBox} />}
      {kind === 'bambooNine' && <Icon.BambooNine viewBox={viewBox} />}

      {kind === 'circleOne' && <Icon.CircleOne viewBox={viewBox} />}
      {kind === 'circleTwo' && <Icon.CircleTwo viewBox={viewBox} />}
      {kind === 'circleThree' && <Icon.CircleThree viewBox={viewBox} />}
      {kind === 'circleFour' && <Icon.CircleFour viewBox={viewBox} />}
      {kind === 'circleFive' && <Icon.CircleFive viewBox={viewBox} />}
      {kind === 'circleSix' && <Icon.CircleSix viewBox={viewBox} />}
      {kind === 'circleSeven' && <Icon.CircleSeven viewBox={viewBox} />}
      {kind === 'circleEight' && <Icon.CircleEight viewBox={viewBox} />}
      {kind === 'circleNine' && <Icon.CircleNine viewBox={viewBox} />}

      {kind === 'characterOne' && <Icon.CharacterOne viewBox={viewBox} />}
      {kind === 'characterTwo' && <Icon.CharacterTwo viewBox={viewBox} />}
      {kind === 'characterThree' && <Icon.CharacterThree viewBox={viewBox} />}
      {kind === 'characterFour' && <Icon.CharacterFour viewBox={viewBox} />}
      {kind === 'characterFive' && <Icon.CharacterFive viewBox={viewBox} />}
      {kind === 'characterSix' && <Icon.CharacterSix viewBox={viewBox} />}
      {kind === 'characterSeven' && <Icon.CharacterSeven viewBox={viewBox} />}
      {kind === 'characterEight' && <Icon.CharacterEight viewBox={viewBox} />}
      {kind === 'characterNine' && <Icon.CharacterNine viewBox={viewBox} />}

      {kind === 'windEast' && <Icon.WindEast viewBox={viewBox} />}
      {kind === 'windNorth' && <Icon.WindNorth viewBox={viewBox} />}
      {kind === 'windWest' && <Icon.WindWest viewBox={viewBox} />}
      {kind === 'windSouth' && <Icon.WindSouth viewBox={viewBox} />}

      {kind === 'dragonRed' && <Icon.DragonRed viewBox={viewBox} />}
      {kind === 'dragonGreen' && <Icon.DragonGreen viewBox={viewBox} />}
      {kind === 'dragonWhite' && <Icon.DragonWhite viewBox={viewBox} />}
    </S.Wrapper>
  );
};

export default Tile;
