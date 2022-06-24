import React from 'react';

import { IconButton } from 'components';
import { useStoryModeContext } from 'shared/context';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

export const ClickablesListButton = (): JSX.Element => {
  const { setShowClickablesList } = useStoryModeContext();

  const onShowClickables = () => {
    setShowClickablesList(true);
  };

  return <IconButton icon={faBookOpen} onClick={onShowClickables} />;
};
