import React, { useState } from 'react';
import styled from 'styled-components';

type AnimationProps = {
  duration?: number;
  timingFunction?: string;
  delay?: number;
  iterationCount?: number;
  direction?: string;
  fillMode?: string;
  playState?: string;
  display?: string;
};

interface BaseAnimationProps extends AnimationProps {
  key: string;
}

interface Props extends AnimationProps {
  children: React.ReactNode;
}

export const BaseAnimation = (props: Props): JSX.Element => {
  const { children, ...animationProps } = props;
  const [key, setKey] = useState<string>(`animation-${Date.now()}`);

  const onAnimatedComponentClick = () => {
    setKey(`animation-${Date.now()}`);
  };

  return (
    <StyledBaseAnimation
      key={key}
      onClick={onAnimatedComponentClick}
      {...animationProps}>
      {children}
    </StyledBaseAnimation>
  );
};

const StyledBaseAnimation = styled.div<BaseAnimationProps>`
  animation-duration: ${({ duration }: BaseAnimationProps) =>
    `${duration ?? 1}s`};
  animation-timing-function: ${({ timingFunction }: BaseAnimationProps) =>
    timingFunction ?? 'ease'};
  animation-delay: ${({ delay }: BaseAnimationProps) => `${delay ?? 0}s`};
  animation-iteration-count: ${({ iterationCount }: BaseAnimationProps) =>
    iterationCount ?? 1};
  animation-direction: ${({ direction }: BaseAnimationProps) =>
    direction ?? 'normal'};
  animation-fill-mode: ${({ fillMode }: BaseAnimationProps) =>
    fillMode ?? 'both'};
  animation-play-state: ${({ playState }: BaseAnimationProps) =>
    playState ?? 'running'};
  display: ${({ display }: BaseAnimationProps) => display ?? 'block'};
`;
