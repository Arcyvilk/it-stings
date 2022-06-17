import React, { useState } from 'react';
import styled from 'styled-components';

import { Bounce } from 'components';
import { getOuch } from 'assets/sounds/ouch';
import cactus from 'assets/images/cacti/cactus_golden.png';

export const CactusButton = (): JSX.Element => {
  const [nrOfClicks, setNrOfClicks] = useState<number>(0);

  const incrementClicks = () => {
    setNrOfClicks(nrOfClicks + 1);
    const ouch = getOuch();
    const audio = new Audio(ouch);
    audio.play();
  };

  return (
    <Bounce duration={1}>
      <Cactus nrOfClicks={nrOfClicks} onClick={incrementClicks} />
    </Bounce>
  );
};

type CactusProps = {
  nrOfClicks: number;
};

const Cactus = styled.img.attrs({ src: cactus })<CactusProps>`
  cursor: pointer;
  width: ${({ nrOfClicks }) => 200 + nrOfClicks * 5}px;
  height: ${({ nrOfClicks }) => 200 + nrOfClicks * 5}px;
`;
