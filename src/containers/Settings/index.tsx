import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faExclamationTriangle,
  faFileAudio,
  faPowerOff,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

import { ThemeType } from 'shared/types';
import { useAppContext, useStoryModeContext } from 'shared/context';
import { Flex, IconButton, Modal, Title } from 'components';

export const Settings = (): JSX.Element => {
  const {
    theme,
    themeType,
    setThemeType,
    showSettingsModal,
    setShowSettingsModal,
  } = useAppContext();
  const { setClicks } = useStoryModeContext();

  const onRestart = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setClicks(0);
  };
  const onChangeThemeClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    if (themeType === ThemeType.DARK) {
      setThemeType(ThemeType.LIGHT);
    } else {
      setThemeType(ThemeType.DARK);
    }
  };
  const onDisableAudioClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <Modal visible={showSettingsModal} setVisible={setShowSettingsModal}>
      <Wrapper column>
        <Title level={2}>
          <FontAwesomeIcon icon={faCog} style={{ marginRight: '8px' }} />
          Settings
        </Title>
      </Wrapper>
      <Flex column align>
        <Buttons align justify>
          <IconButton giant icon={faSun} onClick={onChangeThemeClick} />
          <IconButton giant icon={faFileAudio} onClick={onDisableAudioClick} />
        </Buttons>
        <Title level={3} style={{ color: theme.dangerText }}>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          Danger zone
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </Title>
        <Buttons align justify>
          <IconButton giant icon={faPowerOff} danger onClick={onRestart} />
        </Buttons>
      </Flex>
    </Modal>
  );
};

const Wrapper = styled(Flex)`
  padding-bottom: 4px;
  border-bottom: 1px solid;
`;

const Buttons = styled(Flex)`
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  margin: 8px 0;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;
