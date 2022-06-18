import React, { useState, useContext } from 'react';
import { defaultClickable, ActiveClickable } from 'data/clickables';

type StoryModeContextType = {
  clicks: number;
  setClicks: (clicks: number) => void;
  activeClickable: ActiveClickable;
  setActiveClickable: (activeClickable: ActiveClickable) => void;
  showAchievementsList: boolean;
  setShowAchievementsList: (showAchievementsList: boolean) => void;
  showClickablesList: boolean;
  setShowClickablesList: (showClickablesList: boolean) => void;
};
type Props = {
  children: React.ReactNode;
};

export const StoryModeContextProvider = ({ children }: Props): JSX.Element => {
  const [clicks, setClicks] = useState<number>(0);
  const [activeClickable, setActiveClickable] =
    useState<ActiveClickable>(defaultClickable);
  const [showAchievementsList, setShowAchievementsList] =
    useState<boolean>(false);
  const [showClickablesList, setShowClickablesList] = useState<boolean>(false);

  const value = {
    clicks,
    setClicks,
    activeClickable,
    setActiveClickable,
    showAchievementsList,
    setShowAchievementsList,
    showClickablesList,
    setShowClickablesList,
  };

  return (
    <StoryModeContext.Provider value={value}>
      {children}
    </StoryModeContext.Provider>
  );
};

export const StoryModeContext = React.createContext({} as StoryModeContextType);
export const useStoryModeContext = (): StoryModeContextType =>
  useContext(StoryModeContext);
