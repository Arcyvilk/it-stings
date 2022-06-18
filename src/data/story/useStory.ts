import { useMemo } from 'react';

import { useStoryModeContext } from 'shared/context';
import { Story, stories } from './story';

type UseStory = { getStory: () => string; MAX_CLICKS: number };

export const useStory = (): UseStory => {
  const { clicks } = useStoryModeContext();

  const sortedStories = useMemo(() => {
    return stories.sort((a: Story, b: Story) => b.clicks - a.clicks);
  }, [stories]);

  const MAX_CLICKS = sortedStories[0].clicks;

  const getStory = () => {
    return sortedStories.find(entry => entry.clicks <= clicks)?.text ?? '';
  };

  return { getStory, MAX_CLICKS };
};
