import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useStoryModeContext } from 'shared/context';
import { Bounce } from 'components';
import { getOuch } from 'assets/sounds/ouch';
import { useAchievements, useClickables } from 'data';

export const CactusButton = (): JSX.Element => {
  const { clicks, setClicks, activeClickable } = useStoryModeContext();
  const { unlockAchievement } = useAchievements();
  const { setClickable } = useClickables();

  useEffect(() => {
    setClickable();
    unlockAchievement();
  }, [clicks]);

  const onTouchableClick = () => {
    setClicks(clicks + 1);
    if (!activeClickable.mute) {
      const ouch = getOuch();
      const audio = new Audio(ouch);
      audio.play();
    }
  };

  return (
    <Bounce duration={1}>
      <Cactus
        src={activeClickable.src}
        width={activeClickable.width}
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
