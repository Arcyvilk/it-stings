import React from 'react';

import { IconButton } from 'components';
import { useAppContext } from 'shared/context';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export const SettingsButton = (): JSX.Element => {
  const { setShowSettingsModal } = useAppContext();

  const onShowSettings = () => {
    setShowSettingsModal(true);
  };

  return <IconButton icon={faCog} onClick={onShowSettings} />;
};
