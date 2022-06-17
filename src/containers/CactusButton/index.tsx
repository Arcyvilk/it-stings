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
      <Cactus onClick={incrementClicks} />
    </Bounce>
  );
};

const Cactus = styled.img.attrs({ src: cactus })`
  cursor: pointer;
  width: 300px;
  height: 300px;
`;
