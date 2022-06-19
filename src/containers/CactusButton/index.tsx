import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useStoryModeContext } from 'shared/context';
import { Bounce } from 'components';
import { useStory, useAchievements, useClickables, useSounds } from 'data';
import { toast } from 'react-toastify';

export const CactusButton = (): JSX.Element => {
  const { clicks, setClicks, activeClickable } = useStoryModeContext();
  const { MAX_CLICKS } = useStory();
  const { playClickSound } = useSounds();
  const { setClickable } = useClickables();
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    setClickable();
    unlockAchievement();
  }, [clicks]);

  const onTouchableClick = () => {
    if (clicks >= MAX_CLICKS) {
      setClicks(MAX_CLICKS);
      toast.warning(
        'You have reached the end of story mode. Further clicking will not do anything for now. Stay tuned for the updates!',
      );
      return;
    }
    setClicks(clicks + 1);
    if (activeClickable.clickSound) {
      playClickSound();
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
