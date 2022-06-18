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
      if (id && !unlockedClickablesIds.includes(id)) {
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
      setActiveClickable({
        id: clickable.id,
        src: clickable.src,
        mute: !!clickable.mute,
        width:
          clickable.minSize + (clicks - clickable.clicks) * clickable.growth,
      });
      unlockClickable(clickable.id);
    }
  };

  const unlockedClickables = useMemo(
    () =>
      clickables.filter(clickable =>
        unlockedClickablesIds.includes(clickable.id),
      ),
    [unlockedClickablesIds],
  );

  return { setClickable, unlockedClickables };
};
