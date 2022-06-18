import React from 'react';
import styled from 'styled-components';

import { Flex, IconButton } from 'components';
import { useStoryModeContext } from 'shared/context';
import {
  faBookOpen,
  faPowerOff,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

export const StatusBar = (): JSX.Element => {
  const { clicks, setClicks } = useStoryModeContext();

  const onShowAchievements = () => {
    alert('Achievements page is not implemented yet');
  };
  const onShowClickables = () => {
    alert('Clickables page is not implemented yet');
  };
  const onRestart = () => {
    setClicks(1);
  };

  return (
    <Bar align>
      <Buttons>
        <IconButton icon={faTrophy} onClick={onShowAchievements} />
        <IconButton icon={faBookOpen} onClick={onShowClickables} />
      </Buttons>
      <span>{clicks}</span>
      <IconButton icon={faPowerOff} danger onClick={onRestart} />
    </Bar>
  );
};

const Bar = styled(Flex)`
  position: absolute;
  justify-content: space-between;
  width: 100%;
  top: 0;
  padding: 8px;
  box-sizing: border-box;
  background-color: black;
  font-size: 1.5em;
  text-align: center;
`;

const Buttons = styled(Flex).attrs({ row: true })`
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;
