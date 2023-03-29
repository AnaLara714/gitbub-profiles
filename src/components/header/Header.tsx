import DarkOn from "../../assets/icon/switchDarkON.png";
import DarkOff from "../../assets/icon/switchDarkOFF.png";
import React from "react";
import { ThemeChangeContext } from "../../context/ThemeChangeContext";

export const Header: React.FC = () => {
  const {darkMode, toogleDarkMode} = React.useContext(ThemeChangeContext);
  
  return (
    <nav className="flex justify-between w-full place-content-between items-center">
      <h4>Github Profiles</h4>
      <button>
        <img 
          onClick={toogleDarkMode}
          src={darkMode ? DarkOn : DarkOff} 
          className="self-left justify-self-end"
          alt="Botao de Modo dark ativo" />
      </button>
    </nav>
  )
}