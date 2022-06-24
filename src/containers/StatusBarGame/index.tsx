import React from 'react';
import styled from 'styled-components';

import { Theme } from 'shared/theme';
import { Flex } from 'components';
import { useAppContext, useStoryModeContext } from 'shared/context';
import { SettingsButton } from 'containers/ActionButtons';

export const StatusBarGame = (): JSX.Element => {
  const { theme } = useAppContext();
  const { clicks } = useStoryModeContext();

  return (
    <Bar align theme={theme}>
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
