import React from "react";

interface IThemeChange {
  darkMode: boolean;
  toogleDarkMode: () => void;
};

interface IThemeChangeProvider {
  children: React.ReactNode;
};

export const ThemeChangeContext = React.createContext<IThemeChange>({} as IThemeChange, );

export const ThemeChangeProvider: React.FC<IThemeChangeProvider> = ({children}) => {
  const [darkMode, setDarkMode] = React.useState(true);

  const toogleDarkMode = () => setDarkMode(prevDarkMode => !prevDarkMode)
  
  return (
    <ThemeChangeContext.Provider value={{
      darkMode,
      toogleDarkMode
    }}>
      {children}
    </ThemeChangeContext.Provider>
  )
}

