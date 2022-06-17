import React from 'react';
import styled from 'styled-components';

import { useAppContext } from 'shared/context';
import { Bounce } from 'components';
import { getOuch } from 'assets/sounds/ouch';
import { useClickable } from 'story';

export const CactusButton = (): JSX.Element => {
  const { clicks, setClicks } = useAppContext();
  const { getClickable } = useClickable();

  const clickable = getClickable();

  const incrementClicks = () => {
    setClicks(clicks + 1);
    if (!clickable.mute) {
      const ouch = getOuch();
      const audio = new Audio(ouch);
      audio.play();
    }
  };

  return (
    <Bounce duration={1}>
      <Cactus
        src={clickable.src}
        width={clickable.width}
        onClick={incrementClicks}
      />
    </Bounce>
  );
};

type CactusProps = {
  width: number;
};

const Cactus = styled.img<CactusProps>`
  cursor: pointer;
  width: ${({ width }) => width}px;
`;
