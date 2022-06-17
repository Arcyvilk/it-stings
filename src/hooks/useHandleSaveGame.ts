import { useLocalStorage } from 'hooks/useLocalStorage';
import { useEffect } from 'react';
import { useAppContext } from 'shared/context';

const defaultSave = { clicks: 0 };

export const useHandleSaveGame = (): any => {
  const { clicks, setClicks } = useAppContext();
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
