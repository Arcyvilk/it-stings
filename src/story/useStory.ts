import { useMemo } from 'react';
import { Story, stories } from './story';

export const useStory = (): { getStory: (clicks: number) => string } => {
  const sortedStories = useMemo(() => {
    return stories.sort((a: Story, b: Story) => b.clicks - a.clicks);
  }, [stories]);

  const getStory = (clicks: number) => {
    return sortedStories.find(entry => entry.clicks <= clicks)?.text ?? '';
  };

  return { getStory };
};
