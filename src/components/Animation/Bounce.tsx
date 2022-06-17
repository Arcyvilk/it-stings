import styled, { keyframes } from 'styled-components';
import { BaseAnimation } from './BaseAnimation';

const bounceAnimation = keyframes`
  from {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1) translateY(+10%);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1) translateY(-10%);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1) translateY(+5%);
    }
    65% {
      transform: scale3d(.95, 1.05, 1) translateY(-5%);
    }
    75% {
      transform: scale3d(1.05, .95, 1) translateY(+2.5%);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
`;

export const Bounce = styled(BaseAnimation)`
  animation-name: ${bounceAnimation};
`;
