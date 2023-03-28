import React, { createContext } from 'react';

interface IThemeChange {
  darkMode: boolean;
  toogleDarkMode: () => void;
};

interface IThemeChangeProviderProps {
  children: React.ReactNode;
}
export const ThemeChangeContext = React.createContext<IThemeChange>({} as IThemeChange, );

export const ThemeChangeProvider: React.FC<IThemeChangeProviderProps> = ({children}) => {
  const [darkMode, setDarkMode] = React.useState(true);
  const toogleDarkMode = () => { 
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    <ThemeChangeContext.Provider value={{
      darkMode,
      toogleDarkMode
    }}>
      {children}
    </ThemeChangeContext.Provider>
  )
}

