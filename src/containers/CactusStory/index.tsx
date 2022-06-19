import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';

import { useAppContext, useStoryModeContext } from 'shared/context';
import { useSounds, useStory } from 'data';
import { Theme } from 'shared/theme';

export const CactusStory = (): JSX.Element => {
  const { theme } = useAppContext();
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
    return <Story theme={theme}>{currentStory.text}</Story>;
  }
  return <></>;
};

const Story = styled.div<{ theme: Theme }>`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 12px 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) => `${theme.tertiaryBg}dd`};
  font-size: 1.4em;
  text-align: center;
  line-height: 1.4em;
`;
