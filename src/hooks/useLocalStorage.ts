import { useState } from 'react';

type LocalStorage = [any, (lsValue: any) => void];

export const useLocalStorage = (
  keyName: string,
  defaultValue?: any,
): LocalStorage => {
  const [storedLSValue, setStoredLSValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setLSValue = (newValue: string) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
    setStoredLSValue(newValue);
  };

  return [storedLSValue, setLSValue];
};
