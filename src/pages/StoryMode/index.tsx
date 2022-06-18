import React from 'react';
import styled from 'styled-components';

import { Flex } from 'components';
import { CactusButton, CactusStory, StatusBar } from 'containers';
import { Theme } from 'shared/theme';
import { useAppContext } from 'shared/context';
import { useHandleSaveGame } from 'hooks';

export default function StoryMode(): JSX.Element {
  const { theme } = useAppContext();
  useHandleSaveGame();

  return (
    <MainWrapper theme={theme}>
      <Flex column align justify>
        <StatusBar />
        <CactusButton />
        <CactusStory />
      </Flex>
    </MainWrapper>
  );
}

const MainWrapper = styled.div.attrs(({ theme }: { theme: Theme }) => {
  const style: React.CSSProperties = {
    color: theme.primaryText,
    backgroundColor: theme.primaryBg,
  };
  return { style };
})<{ theme: Theme }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
