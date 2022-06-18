import { useCallback, useMemo } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';

import { useStoryModeContext } from 'shared/context';
import { Clickable, clickables } from './clickables';
import { defaultClickable } from '.';

type UseClickables = {
  setClickable: () => void;
  MAX_CLICKS: number;
};

export const useClickables = (): UseClickables => {
  const { clicks, setActiveClickable } = useStoryModeContext();
  const [unlockedClickables, setUnlockedClickables] = useLocalStorage(
    'itstings/clickables',
    [],
  );

  const sortedClickables = useMemo(() => {
    return clickables.sort((a: Clickable, b: Clickable) => b.clicks - a.clicks);
  }, [clickables]);

  const MAX_CLICKS = sortedClickables[0].clicks;

  const unlockClickable = useCallback(
    (id: string) => {
      if (id && !unlockedClickables.includes(id)) {
        setUnlockedClickables([...unlockedClickables, id]);
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

  return { setClickable, MAX_CLICKS };
};
