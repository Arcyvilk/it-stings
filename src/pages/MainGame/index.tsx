import React from 'react';

import { Settings, TopBarGame, CactusTable } from 'containers';

import { useAppContext } from 'shared/context';
import { useHandleSaveGame } from 'hooks';

export default function MainGame(): JSX.Element {
  const { showSettingsModal } = useAppContext();
  useHandleSaveGame();

  return (
    <>
      {showSettingsModal && <Settings />}
      <TopBarGame />
      <CactusTable />
    </>
  );
}
