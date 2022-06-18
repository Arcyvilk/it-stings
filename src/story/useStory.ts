import { useMemo } from 'react';

import { useStoryModeContext } from 'shared/context';
import { Story, stories } from './story';

type UseStory = { getStory: () => string };

export const useStory = (): UseStory => {
  const { clicks } = useStoryModeContext();

  const sortedStories = useMemo(() => {
    return stories.sort((a: Story, b: Story) => b.clicks - a.clicks);
  }, [stories]);

  const getStory = () => {
    return sortedStories.find(entry => entry.clicks <= clicks)?.text ?? '';
  };

  return { getStory };
};
