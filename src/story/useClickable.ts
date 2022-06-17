import { useMemo } from 'react';

import { useAppContext } from 'shared/context';
import { Clickable, clickables } from './clickables';

type UseClickable = {
  getClickable: () => { src: string; mute: boolean; width: number };
};

export const useClickable = (): UseClickable => {
  const { clicks } = useAppContext();

  const sortedClickables = useMemo(() => {
    return clickables.sort((a: Clickable, b: Clickable) => b.clicks - a.clicks);
  }, [clickables]);

  const getClickable = () => {
    const clickable = sortedClickables.find(entry => entry.clicks <= clicks);
    if (!clickable) {
      return { src: '', mute: false, width: 0 };
    }

    return {
      src: clickable?.src,
      mute: !!clickable?.mute,
      width:
        clickable.minSize + (clicks - clickable?.clicks) * clickable?.growth,
    };
  };

  return { getClickable };
};
