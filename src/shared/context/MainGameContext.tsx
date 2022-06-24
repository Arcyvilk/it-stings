import React, { useState, useContext } from 'react';

type MainGameContextType = {
  clicks: number;
  setClicks: (clicks: number) => void;
};
type Props = {
  children: React.ReactNode;
};

export const MainGameContextProvider = ({ children }: Props): JSX.Element => {
  const [clicks, setClicks] = useState<number>(0);

  const value = {
    clicks,
    setClicks,
  };

  return (
    <MainGameContext.Provider value={value}>
      {children}
    </MainGameContext.Provider>
  );
};

export const MainGameContext = React.createContext({} as MainGameContextType);
export const useMainGameContext = (): MainGameContextType =>
  useContext(MainGameContext);
