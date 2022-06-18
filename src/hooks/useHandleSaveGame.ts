import { useLocalStorage } from 'hooks/useLocalStorage';
import { useEffect } from 'react';
import { useStoryModeContext } from 'shared/context';

const defaultSave = { clicks: 0 };

export const useHandleSaveGame = (): void => {
  const { clicks, setClicks } = useStoryModeContext();
  const [savedGame, setSaveGame] = useLocalStorage(
    'itstings/save',
    defaultSave,
  );

  useEffect(() => {
    setSaveGame({ clicks: clicks ?? 0 });
  }, [clicks]);

  useEffect(() => {
    setClicks(savedGame?.clicks);
  }, []);
};
