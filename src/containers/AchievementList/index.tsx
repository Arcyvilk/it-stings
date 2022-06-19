import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

import { useStoryModeContext } from 'shared/context';
import { Flex, Modal, Title } from 'components';
import { TrophyCabinet } from 'containers';
import { useAchievements } from 'data';

export const AchievementList = (): JSX.Element => {
  const { showAchievementsList, setShowAchievementsList } =
    useStoryModeContext();
  const { unlockedAchievements } = useAchievements();

  return (
    <Modal visible={showAchievementsList} setVisible={setShowAchievementsList}>
      <Wrapper column>
        <Title level={2}>
          <FontAwesomeIcon icon={faTrophy} style={{ marginRight: '8px' }} />
          Achievements
        </Title>
      </Wrapper>
      <Trophies column>
        {unlockedAchievements.map(achievement => (
          <TrophyCabinet
            key={`achievement-${achievement.id}`}
            title={achievement.name}
            description={achievement.description}
            icon={faTrophy}
          />
        ))}
      </Trophies>
    </Modal>
  );
};

const Wrapper = styled(Flex)`
  padding-bottom: 4px;
  border-bottom: 1px solid;
`;

const Trophies = styled(Flex)`
  width: 100%;
  & > * {
    margin-top: 8px;
  }
`;
