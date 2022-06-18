import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useStoryModeContext } from 'shared/context';
import { Bounce } from 'components';
import { getOuch } from 'assets/sounds/ouch';
import { useAchievements, useClickables } from 'story';

export const CactusButton = (): JSX.Element => {
  const { clicks, setClicks } = useStoryModeContext();
  const { getClickable } = useClickables();
  const { unlockAchievement } = useAchievements();

  const clickable = getClickable();

  useEffect(() => {
    unlockAchievement();
  }, [clicks]);

  const onTouchableClick = () => {
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
        onClick={onTouchableClick}
      />
    </Bounce>
  );
};

type CactusProps = {
  width: number;
};

const Cactus = styled.img.attrs(({ width }) => {
  return { style: { width } };
})<CactusProps>`
  cursor: pointer;
`;
