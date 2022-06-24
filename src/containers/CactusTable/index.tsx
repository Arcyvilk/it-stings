import React from 'react';
import styled from 'styled-components';

export const CactusTable = (): JSX.Element => {
  const size = { x: 3, y: 3 };

  return <Table></Table>;
};

const Table = styled.div`
  display: flex;
`;

const Tile = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid white;
`;
