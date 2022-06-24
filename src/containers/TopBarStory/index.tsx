import React from 'react';
import styled from 'styled-components';

import { Theme } from 'shared/theme';
import { Flex, Title } from 'components';
import { useAppContext, useStoryModeContext } from 'shared/context';
import {
  AchievementsListButton,
  ClickablesListButton,
  SettingsButton,
} from 'containers/ActionButtons';

export const TopBarStory = (): JSX.Element => {
  const { theme } = useAppContext();
  const { clicks } = useStoryModeContext();

  return (
    <Bar align theme={theme}>
      <Buttons>
        <AchievementsListButton />
        <ClickablesListButton />
      </Buttons>
      <Title level={2}>{clicks}</Title>
      <Buttons>
        <SettingsButton />
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
