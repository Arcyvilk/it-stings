import React, { useState } from 'react';
import styled from 'styled-components';

import { Bounce, Flex } from 'components';
import { useAppContext } from 'shared/context';
import { Theme } from 'shared/theme';

import cactusStage1Img from 'assets/main-game/images/cacti/Cacti_Garden_CACTUS_1_baby.png';
import cactusStage2Img from 'assets/main-game/images/cacti/Cacti_Garden_CACTUS_1_medium.png';
import cactusStage3Img from 'assets/main-game/images/cacti/Cacti_Garden_CACTUS_1.png';

type Stage = {
  stage: number;
  clicks: number;
  img: string;
};

type Cactus = {
  id: string;
  stages: Stage[];
};

type UnlockedCactus = {
  row: number;
  column: number;
  cactusId: string;
};

const cacti: Cactus[] = [
  {
    id: 'bvfty7ujnbv',
    stages: [
      {
        stage: 1,
        clicks: 0,
        img: cactusStage1Img,
      },
      {
        stage: 2,
        clicks: 20,
        img: cactusStage2Img,
      },
      {
        stage: 3,
        clicks: 40,
        img: cactusStage3Img,
      },
    ],
  },
];

const unlockedCacti: UnlockedCactus[] = [
  {
    row: 1,
    column: 1,
    cactusId: 'bvfty7ujnbv',
  },
];

export const CactusTable = (): JSX.Element => {
  const { theme } = useAppContext();
  const [clicks, setClicks] = useState<number>(0);

  const rows = [0, 1, 2];
  const columns = [0, 1, 2];

  const getCactus = (row: number, column: number): Stage | undefined => {
    const unlockedCactus = unlockedCacti.find(
      c => c.row === row && c.column === column,
    );
    const cactus = cacti.find(c => c.id === unlockedCactus?.cactusId);
    const cactusStage = cactus?.stages
      .sort((a, b) => b.clicks - a.clicks)
      .find(stage => stage.clicks <= clicks);
    return cactusStage;
  };

  const onTileClick = (row: number, column: number) => {
    const hasCactus = getCactus(row, column);
    if (hasCactus) {
      setClicks(clicks + 1);
    }
  };

  return (
    <Table>
      {rows.map(row => (
        <Flex row key={`row-${row}`}>
          {columns.map(column => (
            <Tile
              theme={theme}
              onClick={() => onTileClick(row, column)}
              key={`tile-${row}-${column}`}>
              {getCactus(row, column) && (
                <Bounce duration={1}>
                  <img src={getCactus(row, column)?.img} />
                </Bounce>
              )}
            </Tile>
          ))}
        </Flex>
      ))}
    </Table>
  );
};

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tile = styled.div.attrs(({ theme }: { theme: Theme }) => {
  return {
    style: {
      border: `1px solid ${theme.primaryBg}`,
      backgroundColor: theme.secondaryBg,
    },
  };
})<{ theme: Theme }>`
  width: 100px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
  }
`;
