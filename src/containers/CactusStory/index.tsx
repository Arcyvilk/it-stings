import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';

import { useStoryModeContext } from 'shared/context';
import { useSounds, useStory } from 'data';

export const CactusStory = (): JSX.Element => {
  const { clicks } = useStoryModeContext();
  const { getStory } = useStory();
  const { playStorySound } = useSounds();

  const currentStory = useMemo(() => {
    return getStory();
  }, [clicks]);

  useEffect(() => {
    if (clicks === currentStory?.clicks) {
      playStorySound(currentStory.id);
    }
  }, [clicks]);

  if (currentStory) {
    return <Story>{currentStory.text}</Story>;
  }
  return <></>;
};

const Story = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 12px 20px;
  box-sizing: border-box;
  background-color: #000000bb;
  font-size: 1.4em;
  text-align: center;
  line-height: 1.4em;
`;
