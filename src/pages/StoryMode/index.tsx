import React from 'react';

import {
  AchievementList,
  CactusButton,
  CactusStory,
  ClickablesList,
  Settings,
  TopBarStory,
} from 'containers';

import { useAppContext, useStoryModeContext } from 'shared/context';
import { useHandleSaveGame } from 'hooks';

export default function StoryMode(): JSX.Element {
  const { showSettingsModal } = useAppContext();
  const { showAchievementsList, showClickablesList } = useStoryModeContext();
  useHandleSaveGame();

  return (
    <>
      {showAchievementsList && <AchievementList />}
      {showClickablesList && <ClickablesList />}
      {showSettingsModal && <Settings />}
      <TopBarStory />
      <CactusButton />
      <CactusStory />
    </>
  );
}
