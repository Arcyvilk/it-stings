import React from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

import { Flex } from 'components';
import { Achievement } from 'data';

type Props = {
  achievement: Achievement;
};

export const AchievementNotification = (props: Props): JSX.Element => {
  const { achievement } = props;
  return (
    <Flex row align>
      <FontAwesomeIcon icon={faTrophy} style={{ marginRight: '8px' }} />
      <Flex column>
        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
          {achievement.name}
        </div>
        <div>{achievement.description}</div>
      </Flex>
    </Flex>
  );
};

type UseAchievementNotification = {
  showAchievementNotification: (achievement: Achievement) => void;
};

export const useAchievementNotification = (): UseAchievementNotification => {
  const showAchievementNotification = (achievement: Achievement) =>
    toast.success(<AchievementNotification achievement={achievement} />, {
      icon: false,
    });

  return { showAchievementNotification };
};
