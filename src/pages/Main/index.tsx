import React, { useContext } from 'react';
import styled from 'styled-components';

import { Flex } from 'components';
import { CactusButton } from 'containers';
import { Theme } from 'shared/theme';
import { AppContext } from 'shared/context';

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
`;

export default function Main(): JSX.Element {
  const { theme } = useContext(AppContext);

  return (
    <MainWrapper theme={theme}>
      <Flex column align justify>
        <CactusButton />
      </Flex>
    </MainWrapper>
  );
}
