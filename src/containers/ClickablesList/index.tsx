import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWindowClose,
  faFingerprint,
  faDumpsterFire,
  faRedo,
  faRedoAlt,
} from '@fortawesome/free-solid-svg-icons';

import { Flex, IconButton, Modal, Title } from 'components';
import { TrophyCabinet } from 'containers';
import { useStoryModeContext } from 'shared/context';
import { Clickable, useClickables } from 'data';

export const ClickablesList = (): JSX.Element => {
  const { setClicks, showClickablesList, setShowClickablesList } =
    useStoryModeContext();
  const { unlockedClickables } = useClickables();

  const onClickableClick = (
    e: React.MouseEvent<HTMLDivElement>,
    clickable: Clickable,
  ) => {
    e.stopPropagation();
    setClicks(clickable.clicks);
  };

  return (
    <Modal
      fullScreen
      visible={showClickablesList}
      setVisible={setShowClickablesList}>
      <Wrapper align>
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
            bonus={
              <IconButton
                icon={faRedoAlt}
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                  onClickableClick(e, clickable)
                }
              />
            }
          />
        ))}
      </Trophies>
    </Modal>
  );
};

const Wrapper = styled(Flex)`
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  box-sizing: border-box;
  width: 100%;
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
