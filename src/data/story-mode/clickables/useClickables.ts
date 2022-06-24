import { useCallback, useMemo } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';

import { useStoryModeContext } from 'shared/context';
import { Clickable, clickables } from './clickables';
import { defaultClickable } from '.';

type UseClickables = {
  setClickable: () => void;
  unlockedClickables: Clickable[];
};

export const useClickables = (): UseClickables => {
  const { clicks, setActiveClickable } = useStoryModeContext();
  const [unlockedClickablesIds, setUnlockedClickablesIds] = useLocalStorage(
    'itstings/clickables',
    [],
  );

  const sortedClickables = useMemo(() => {
    return clickables.sort((a: Clickable, b: Clickable) => b.clicks - a.clicks);
  }, [clickables]);

  const unlockClickable = useCallback(
    (id: string) => {
      const clickable = clickables.find(c => c.id === id);
      if (clickable?.unlockable && !unlockedClickablesIds.includes(id)) {
        setUnlockedClickablesIds([...unlockedClickablesIds, id]);
      }
    },
    [clicks],
  );

  const setClickable = () => {
    const clickable = sortedClickables.find(entry => entry.clicks <= clicks);
    if (!clickable) {
      setActiveClickable(defaultClickable);
    } else {
      const { id, src, clickSound, minSize, growth } = clickable;
      setActiveClickable({
        id,
        src,
        clickSound,
        width: minSize + (clicks - clickable.clicks) * growth,
      });
      unlockClickable(clickable.id);
    }
  };

  const unlockedClickables = useMemo(
    () =>
      clickables
        .filter(clickable => unlockedClickablesIds.includes(clickable.id))
        .sort((a: Clickable, b: Clickable) => a.clicks - b.clicks),
    [unlockedClickablesIds],
  );

  return { setClickable, unlockedClickables };
};
