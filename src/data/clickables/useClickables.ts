import { useMemo } from 'react';

import { useStoryModeContext } from 'shared/context';
import { Clickable, clickables } from './clickables';
import { defaultClickable } from '.';

type UseClickables = {
  setClickable: () => void;
};

export const useClickables = (): UseClickables => {
  const { clicks, activeClickable, setActiveClickable } = useStoryModeContext();

  const sortedClickables = useMemo(() => {
    return clickables.sort((a: Clickable, b: Clickable) => b.clicks - a.clicks);
  }, [clickables]);

  const setClickable = () => {
    const clickable = sortedClickables.find(entry => entry.clicks <= clicks);
    if (activeClickable.id === clickable?.id) {
      return;
    }
    if (!clickable) {
      setActiveClickable(defaultClickable);
    } else {
      setActiveClickable({
        id: clickable?.id,
        src: clickable?.src,
        mute: !!clickable?.mute,
        width:
          clickable.minSize + (clicks - clickable?.clicks) * clickable?.growth,
      });
    }
  };

  return { setClickable };
};
