import { styled } from '@stitches/react';

const scale = 28;
const tile = {
  width: 2.4 * scale,
  height: 3.2 * scale,
  depth: 0.6 * scale,
  padding: 0.3 * scale,
};

export const Wrapper = styled('div', {
  width: tile.width,
  height: tile.height,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#f4f2e7',
  margin: '.1em',
  position: 'relative',
  padding: tile.padding,
  '&::after, &::before': {
    content: '',
    position: 'absolute',
    display: 'block',
  },
  '&::after': {
    width: tile.depth,
    height: '100%',
    left: '100%',
    top: tile.depth / 2,
    background: 'linear-gradient(90deg, #e8e5d8 60%, #2f792f 60%)',
    transform: 'skewY(45deg)',
  },
  '&::before': {
    content: '',
    position: 'absolute',
    top: '100%',
    left: tile.depth / 2,
    display: 'block',
    width: '100%',
    height: tile.depth,
    background: 'linear-gradient(#d5d1c2 60%, #2f792f 60%)',
    transform: 'skewX(45deg)',
  },
  variants: {
    orientation: {
      bottom: {},
      left: {
        width: tile.height,
        height: tile.width,
        '& img': {
          transform: 'rotateZ(90deg)',
        },
      },
      right: {
        width: tile.height,
        height: tile.width,
        '& img': {
          transform: 'rotateZ(-90deg)',
        },
      },
      top: {
        '& img': {
          transform: 'rotateZ(180deg)',
        },
      },
    },
  },
});

export const Vector = styled('img', { width: tile.width });
