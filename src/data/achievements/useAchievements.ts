import { useCallback, useMemo } from 'react';

import { useLocalStorage } from 'hooks/useLocalStorage';
import { useStoryModeContext } from 'shared/context';
import { useAchievementNotification } from 'containers';
import { Achievement, achievements } from './achievements';

type UseAchievement = {
  sortedAchievements: Achievement[];
  getAchievement: () => Achievement | undefined;
  unlockAchievement: () => void;
};

export const useAchievements = (): UseAchievement => {
  const { clicks } = useStoryModeContext();
  const { showAchievementNotification } = useAchievementNotification();
  const [unlockedAchievements, setUnlockedAchievements] = useLocalStorage(
    'itstings/achievements',
    [],
  );

  const sortedAchievements = useMemo(() => {
    return achievements.sort(
      (a: Achievement, b: Achievement) => b.clicks - a.clicks,
    );
  }, [achievements]);

  const getAchievement = useCallback(() => {
    return sortedAchievements.find(entry => entry.clicks === clicks);
  }, [clicks]);

  const unlockAchievement = useCallback(() => {
    const newAchievement = getAchievement();
    if (newAchievement && !unlockedAchievements.includes(newAchievement.id)) {
      setUnlockedAchievements([...unlockedAchievements, newAchievement.id]);
      showAchievementNotification(newAchievement);
    }
  }, [clicks]);

  return { sortedAchievements, getAchievement, unlockAchievement };
};
