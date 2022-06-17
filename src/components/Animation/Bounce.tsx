import styled, { keyframes } from 'styled-components';
import { BaseAnimation } from './BaseAnimation';

const bounceAnimation = keyframes`
  from {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.10, 0.90, 1) translateY(+5%);
    }
    40% {
      transform: scale3d(0.90, 1.10, 1) translateY(-5%);
    }
    50% {
      transform: scale3d(1.05, 0.95, 1) translateY(+2.5%);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1) translateY(-2.5%);
    }
    75% {
      transform: scale3d(1.02, .98, 1) translateY(+1%);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
`;

export const Bounce = styled(BaseAnimation)`
  animation-name: ${bounceAnimation};
`;
