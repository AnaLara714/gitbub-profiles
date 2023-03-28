import React from "react";
import "../profileStatistics/profileStatistics.css"
import { ThemeChangeContext } from "../../context/ThemeChangeContext";

export const ProfileStatistics: React.FC = () => {
  const {darkMode} = React.useContext(ThemeChangeContext);

  return (
    <div className={`flex direction-column flex-col p-4 w-52 rounded-2xl  ${darkMode ? "darkBox" : "lightBox"}`}>
      <span className="flex justify-between"><label>Repositorios</label> 0</span>
      <span className="flex justify-between"><label>Seguidores</label> 0</span>
      <span className="flex justify-between"><label>Seguindo</label> 0</span>
      <span className="flex justify-between"><label>Estrelas</label> 0</span>
    </div>
  )
}