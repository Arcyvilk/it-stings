import React from 'react';
import styled from 'styled-components';

import { Flex } from 'components';
import { useAppContext } from 'shared/context';

export const StatusBar = (): JSX.Element => {
  const { clicks, setClicks } = useAppContext();

  const onRestart = () => {
    setClicks(1);
  };

  return (
    <Bar align>
      <span>{clicks}</span>
      <button onClick={onRestart}>Restart?</button>
    </Bar>
  );
};

const Bar = styled(Flex)`
  position: absolute;
  justify-content: space-between;
  width: 100%;
  top: 0;
  padding: 20px 32px;
  box-sizing: border-box;
  background-color: black;
  font-size: 1.5em;
  text-align: center;
`;
