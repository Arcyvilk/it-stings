import React from 'react';
import styled from 'styled-components';

import { Flex } from 'components';
import {
  AchievementList,
  CactusButton,
  CactusStory,
  ClickablesList,
  Settings,
  StatusBar,
} from 'containers';

import { Theme } from 'shared/theme';
import { useAppContext, useStoryModeContext } from 'shared/context';
import { useHandleSaveGame } from 'hooks';

export default function StoryMode(): JSX.Element {
  const { theme, showSettingsModal } = useAppContext();
  const { showAchievementsList, showClickablesList } = useStoryModeContext();
  useHandleSaveGame();

  return (
    <MainWrapper theme={theme}>
      <Flex column align justify>
        {showAchievementsList && <AchievementList />}
        {showClickablesList && <ClickablesList />}
        {showSettingsModal && <Settings />}
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
