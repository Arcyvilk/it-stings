import React from 'react';
import styled from 'styled-components';

type Props = {
  level: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
};

export const Title = (props: Props): JSX.Element => {
  const { level, children } = props;

  return (
    <Wrapper>
      {level === 1 && <h1>{children}</h1>}
      {level === 2 && <h2>{children}</h2>}
      {level === 3 && <h3>{children}</h3>}
      {level === 4 && <h4>{children}</h4>}
      {level === 5 && <h5>{children}</h5>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
