import React, { FC } from 'react';
import bambooOne from './assets/bamboo-1.svg';
import bambooTwo from './assets/bamboo-2.svg';
import bambooThree from './assets/bamboo-3.svg';
import bambooFour from './assets/bamboo-4.svg';
import bambooFive from './assets/bamboo-5.svg';
import bambooSix from './assets/bamboo-6.svg';
import bambooSeven from './assets/bamboo-7.svg';
import bambooEight from './assets/bamboo-8.svg';
import bambooNine from './assets/bamboo-9.svg';
import characterOne from './assets/character-1.svg';
import characterTwo from './assets/character-2.svg';
import characterThree from './assets/character-3.svg';
import characterFour from './assets/character-4.svg';
import characterFive from './assets/character-5.svg';
import characterSix from './assets/character-6.svg';
import characterSeven from './assets/character-7.svg';
import characterEight from './assets/character-8.svg';
import characterNine from './assets/character-9.svg';
import circleOne from './assets/circle-1.svg';
import circleTwo from './assets/circle-2.svg';
import circleThree from './assets/circle-3.svg';
import circleFour from './assets/circle-4.svg';
import circleFive from './assets/circle-5.svg';
import circleSix from './assets/circle-6.svg';
import circleSeven from './assets/circle-7.svg';
import circleEight from './assets/circle-8.svg';
import circleNine from './assets/circle-9.svg';
import dragonGreen from './assets/dragon-green.svg';
import dragonRed from './assets/dragon-red.svg';
import dragonWhite from './assets/dragon-white.svg';
import windEast from './assets/wind-east.svg';
import windNorth from './assets/wind-north.svg';
import windSouth from './assets/wind-south.svg';
import windWest from './assets/wind-west.svg';
import { TKind, TOrientation } from '../types';

import * as S from './Tile.styled';

interface Props {
  kind: TKind;
  orientation?: TOrientation;
}

const Kind: FC<Props> = ({ kind, orientation = 'bottom' }) => {
  return (
    <S.Wrapper orientation={orientation}>
      {kind === 'bambooOne' && <S.Vector src={bambooOne} />}
      {kind === 'bambooTwo' && <S.Vector src={bambooTwo} />}
      {kind === 'bambooThree' && <S.Vector src={bambooThree} />}
      {kind === 'bambooFour' && <S.Vector src={bambooFour} />}
      {kind === 'bambooFive' && <S.Vector src={bambooFive} />}
      {kind === 'bambooSix' && <S.Vector src={bambooSix} />}
      {kind === 'bambooSeven' && <S.Vector src={bambooSeven} />}
      {kind === 'bambooEight' && <S.Vector src={bambooEight} />}
      {kind === 'bambooNine' && <S.Vector src={bambooNine} />}
      {kind === 'circleOne' && <S.Vector src={circleOne} />}
      {kind === 'circleTwo' && <S.Vector src={circleTwo} />}
      {kind === 'circleThree' && <S.Vector src={circleThree} />}
      {kind === 'circleFour' && <S.Vector src={circleFour} />}
      {kind === 'circleFive' && <S.Vector src={circleFive} />}
      {kind === 'circleSix' && <S.Vector src={circleSix} />}
      {kind === 'circleSeven' && <S.Vector src={circleSeven} />}
      {kind === 'circleEight' && <S.Vector src={circleEight} />}
      {kind === 'circleNine' && <S.Vector src={circleNine} />}
      {kind === 'characterOne' && <S.Vector src={characterOne} />}
      {kind === 'characterTwo' && <S.Vector src={characterTwo} />}
      {kind === 'characterThree' && <S.Vector src={characterThree} />}
      {kind === 'characterFour' && <S.Vector src={characterFour} />}
      {kind === 'characterFive' && <S.Vector src={characterFive} />}
      {kind === 'characterSix' && <S.Vector src={characterSix} />}
      {kind === 'characterSeven' && <S.Vector src={characterSeven} />}
      {kind === 'characterEight' && <S.Vector src={characterEight} />}
      {kind === 'characterNine' && <S.Vector src={characterNine} />}
      {kind === 'dragonRed' && <S.Vector src={dragonRed} />}
      {kind === 'dragonGreen' && <S.Vector src={dragonGreen} />}
      {kind === 'dragonWhite' && <S.Vector src={dragonWhite} />}
      {kind === 'windEast' && <S.Vector src={windEast} />}
      {kind === 'windSouth' && <S.Vector src={windSouth} />}
      {kind === 'windWest' && <S.Vector src={windWest} />}
      {kind === 'windNorth' && <S.Vector src={windNorth} />}
    </S.Wrapper>
  );
};

export default Kind;
