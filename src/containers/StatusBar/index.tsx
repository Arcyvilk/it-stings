import React from 'react';
import styled from 'styled-components';

import { Theme } from 'shared/theme';
import { Flex, IconButton, Title } from 'components';
import { useAppContext, useStoryModeContext } from 'shared/context';
import { faBookOpen, faCog, faTrophy } from '@fortawesome/free-solid-svg-icons';

export const StatusBar = (): JSX.Element => {
  const { theme, setShowSettingsModal } = useAppContext();
  const { clicks, setShowAchievementsList, setShowClickablesList } =
    useStoryModeContext();

  const onShowAchievements = () => {
    setShowAchievementsList(true);
  };
  const onShowClickables = () => {
    setShowClickablesList(true);
  };
  const onShowSettings = () => {
    setShowSettingsModal(true);
  };

  return (
    <Bar align theme={theme}>
      <Buttons>
        <IconButton icon={faTrophy} onClick={onShowAchievements} />
        <IconButton icon={faBookOpen} onClick={onShowClickables} />
      </Buttons>
      <Title level={2}>{clicks}</Title>
      <Buttons>
        <IconButton icon={faCog} onClick={onShowSettings} />
      </Buttons>
    </Bar>
  );
};

const Bar = styled(Flex)<{ theme: Theme }>`
  position: absolute;
  justify-content: space-between;
  width: 100%;
  top: 0;
  padding: 8px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.tertiaryBg};
  text-align: center;
`;

const Buttons = styled(Flex).attrs({ row: true })`
  flex: 0 0 auto;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;
