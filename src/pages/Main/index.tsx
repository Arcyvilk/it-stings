import React from 'react';
import styled from 'styled-components';

import { Flex } from 'components';
import { CactusButton, CactusStory } from 'containers';
import { Theme } from 'shared/theme';
import { useAppContext } from 'shared/context';

const MainWrapper = styled.div.attrs(({ theme }: { theme: Theme }) => {
  const style: React.CSSProperties = {
    color: theme.primaryText,
    backgroundColor: theme.primaryBg,
  };
  return { style };
})<{ theme: Theme }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default function Main(): JSX.Element {
  const { theme } = useAppContext();

  return (
    <MainWrapper theme={theme}>
      <Flex column align justify>
        <CactusButton />
        <CactusStory />
      </Flex>
    </MainWrapper>
  );
}
