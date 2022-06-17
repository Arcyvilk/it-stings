import React, { useMemo } from 'react';
import styled from 'styled-components';

import { useAppContext } from 'shared/context';
import { useStory } from 'story/story';

export const CactusStory = (): JSX.Element => {
  const { clicks } = useAppContext();
  const { getStory } = useStory();

  const currentStory = useMemo(() => {
    return getStory(clicks);
  }, [clicks]);

  if (currentStory) {
    return <Story>{currentStory}</Story>;
  }
  return <></>;
};

const Story = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 20px 32px;
  box-sizing: border-box;
  background-color: black;
  font-size: 1.5em;
  text-align: center;
`;
