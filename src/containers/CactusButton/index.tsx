import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useStoryModeContext } from 'shared/context';
import { Bounce } from 'components';
import { useStory, useAchievements, useClickables, useSounds } from 'data';
import { toast } from 'react-toastify';

type NaturalSize = { width: number; height: number };

export const CactusButton = (): JSX.Element => {
  const { clicks, setClicks, activeClickable } = useStoryModeContext();
  const { MAX_CLICKS } = useStory();
  const { playClickSound } = useSounds();
  const { setClickable } = useClickables();
  const { unlockAchievement } = useAchievements();

  const [naturalSize, setNaturalSize] = useState<NaturalSize>({
    width: 200,
    height: 200,
  });

  useEffect(() => {
    setClickable();
    unlockAchievement();
  }, [clicks]);

  const onTouchableClick = () => {
    if (activeClickable.clickSound) {
      playClickSound();
    }
    if (clicks >= MAX_CLICKS) {
      setClicks(MAX_CLICKS);
      toast.warning(
        'You have reached the end of story mode. Further clicking will not do anything for now. Stay tuned for the updates!',
      );
      return;
    }
    setClicks(clicks + 1);
  };

  const onImgOnload: React.ReactEventHandler<HTMLImageElement> = event => {
    const { naturalWidth: width, naturalHeight: height } =
      event.target as HTMLImageElement;
    setNaturalSize({ width, height });
  };

  if (!activeClickable) {
    return <span>Loading...</span>;
  }
  return (
    <Bounce duration={1}>
      <Cactus
        src={activeClickable.src}
        naturalSize={naturalSize}
        growth={activeClickable.width}
        onLoad={onImgOnload}
        onClick={onTouchableClick}
      />
    </Bounce>
  );
};

interface CactusProps {
  growth: number;
  naturalSize: NaturalSize;
}

const Cactus = styled.img.attrs(({ growth, naturalSize }: CactusProps) => {
  const style: React.CSSProperties = {};
  if (naturalSize.width >= naturalSize.height) {
    style.width = growth;
  } else {
    style.height = growth;
  }
  return { style };
})<CactusProps>`
  cursor: pointer;
  object-fit: contain;
`;
