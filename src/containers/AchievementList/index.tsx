import React from 'react';
import styled from 'styled-components';

import { useStoryModeContext } from 'shared/context';
import { Modal } from 'components';

export const AchievementList = (): JSX.Element => {
  const { showAchievementsList, setShowAchievementsList } =
    useStoryModeContext();

  return (
    <Modal visible={showAchievementsList} setVisible={setShowAchievementsList}>
      <Wrapper>hehe</Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div``;
