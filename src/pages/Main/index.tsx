import React, { useContext } from 'react';
import styled from 'styled-components';
import { Flex } from 'components';
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
  const { theme, themeType, setThemeType } = useContext(AppContext);
  const onChangeThemeClick = () => {
    if (themeType === 'light') {
      setThemeType('dark');
    } else {
      setThemeType('light');
    }
  };

  return (
    <MainWrapper theme={theme}>
      <Flex column align justify>
        <div>(((o(*ﾟ▽ﾟ*)o)))</div>
        <button onClick={onChangeThemeClick}>Reverse theme</button>
      </Flex>
    </MainWrapper>
  );
}
