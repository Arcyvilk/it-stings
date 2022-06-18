import React, { useMemo } from 'react';
import styled from 'styled-components';

import { useAppContext } from 'shared/context';
import { useStory } from 'story';

export const CactusStory = (): JSX.Element => {
  const { clicks } = useAppContext();
  const { getStory } = useStory();

  const currentStory = useMemo(() => {
    return getStory();
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
  padding: 12px 20px;
  box-sizing: border-box;
  background-color: #000000bb;
  font-size: 1.4em;
  text-align: center;
  line-height: 1.4em;
`;
