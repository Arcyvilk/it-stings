import React from 'react';

import { IconButton } from 'components';
import { useAppContext, GameMode } from 'shared/context';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

import { APP_NAME } from 'pages/App';

export const GameModeSwapButton = (): JSX.Element => {
  const history = useHistory();
  const { gameMode, setGameMode } = useAppContext();

  const onGameModeSwap = () => {
    if (gameMode === GameMode.MAIN_GAME) {
      setGameMode(GameMode.STORY);
      history.push(`/${APP_NAME}/story`);
    } else {
      setGameMode(GameMode.MAIN_GAME);
      history.push(`/${APP_NAME}`);
    }
  };

  return <IconButton icon={faGamepad} onClick={onGameModeSwap} />;
};
