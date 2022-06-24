import React, { useState, useEffect, useContext } from 'react';
import { ThemeType } from 'shared/types';
import { theme as mainTheme, Theme } from 'shared/theme';

export enum GameMode {
  STORY = 'story',
  MAIN_GAME = 'main_game',
}

type AppContextType = {
  themeType: ThemeType;
  setThemeType: (themeType: ThemeType) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;

  volumeOn: boolean;
  setVolumeOn: (volumeOn: boolean) => void;
  showSettingsModal: boolean;
  setShowSettingsModal: (showClickablesList: boolean) => void;

  gameMode: GameMode;
  setGameMode: (gameMode: GameMode) => void;
};
type Props = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: Props): JSX.Element => {
  const defaultThemeType: ThemeType = ThemeType.DARK;
  const [themeType, setThemeType] = useState<ThemeType>(defaultThemeType);
  const [theme, setTheme] = useState<Theme>(mainTheme[defaultThemeType]);

  const [volumeOn, setVolumeOn] = useState<boolean>(true);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);

  const [gameMode, setGameMode] = useState<GameMode>(GameMode.STORY);

  useEffect(() => {
    setTheme(mainTheme[themeType]);
  }, [themeType]);

  const value = {
    themeType,
    setThemeType,
    theme,
    setTheme,
    volumeOn,
    setVolumeOn,
    showSettingsModal,
    setShowSettingsModal,
    gameMode,
    setGameMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContext = React.createContext({} as AppContextType);
export const useAppContext = (): AppContextType => useContext(AppContext);
