import React from 'react';
import styled from 'styled-components';

type Props = {
  level: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Title = (props: Props): JSX.Element => {
  const { level, children, style = {} } = props;

  return (
    <Wrapper style={style}>
      {level === 1 && <h1>{children}</h1>}
      {level === 2 && <h2>{children}</h2>}
      {level === 3 && <h3>{children}</h3>}
      {level === 4 && <h4>{children}</h4>}
      {level === 5 && <h5>{children}</h5>}
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs(
  ({ style }: { style: React.CSSProperties }) => {
    return { style };
  },
)`
  & > * {
    margin: 0;
    padding: 0;
  }
  h1 {
  }
  h2 {
  }
  h3 {
  }
  h4 {
  }
  h5 {
  }
`;
