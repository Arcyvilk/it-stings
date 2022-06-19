import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

import { Flex, Modal, Title } from 'components';
import { TrophyCabinet } from 'containers';
import { useStoryModeContext } from 'shared/context';
import { useClickables } from 'data';

export const ClickablesList = (): JSX.Element => {
  const { showClickablesList, setShowClickablesList } = useStoryModeContext();
  const { unlockedClickables } = useClickables();

  return (
    <Modal
      fullScreen
      visible={showClickablesList}
      setVisible={setShowClickablesList}>
      <Wrapper column>
        <Title level={2}>
          <FontAwesomeIcon
            icon={faFingerprint}
            style={{ marginRight: '8px' }}
          />
          Touchables
        </Title>
      </Wrapper>
      <Trophies column>
        {unlockedClickables.map(clickable => (
          <TrophyCabinet
            key={`clickable-${clickable.id}`}
            title={clickable.name}
            description={clickable.description}
            img={clickable.src}
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
  height: 95%;
  overflow: scroll;
  box-sizing: border-box;
  & > * {
    margin-top: 8px;
  }
`;
