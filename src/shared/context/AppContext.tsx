import React, { useState, useEffect, useContext } from 'react';
import { ThemeType } from 'shared/types';
import { theme as mainTheme, Theme } from 'shared/theme';

type AppContextType = {
  themeType: ThemeType;
  setThemeType: (themeType: ThemeType) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
type Props = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: Props): JSX.Element => {
  const defaultThemeType: ThemeType = 'dark';
  const [themeType, setThemeType] = useState<ThemeType>(defaultThemeType);
  const [theme, setTheme] = useState<Theme>(mainTheme[defaultThemeType]);

  useEffect(() => {
    setTheme(mainTheme[themeType]);
  }, [themeType]);

  const value = {
    themeType,
    setThemeType,
    theme,
    setTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContext = React.createContext({} as AppContextType);
export const useAppContext = (): AppContextType => useContext(AppContext);
