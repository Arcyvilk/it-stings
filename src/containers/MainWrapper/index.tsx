import React from 'react';
import styled from 'styled-components';

import { Theme } from 'shared/theme';

export const MainWrapper = styled.div.attrs(({ theme }: { theme: Theme }) => {
  const style: React.CSSProperties = {
    color: theme.primaryText,
    backgroundColor: theme.primaryBg,
  };
  return { style };
})<{ theme: Theme }>`
  display: flex;
  direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
