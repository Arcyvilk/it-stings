import React from 'react';

import { IconButton } from 'components';
import { useStoryModeContext } from 'shared/context';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

export const AchievementsListButton = (): JSX.Element => {
  const { setShowAchievementsList } = useStoryModeContext();

  const onShowAchievements = () => {
    setShowAchievementsList(true);
  };

  return <IconButton icon={faTrophy} onClick={onShowAchievements} />;
};
