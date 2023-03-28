import React from "react";
import "../profileStatistics/profileStatistics.css"
import { ThemeChangeContext } from "../../context/ThemeChangeContext";
import { ApiContext } from "../../context/apiContext";

export const ProfileRepositories: React.FC = () => {
  const {darkMode} = React.useContext(ThemeChangeContext);
  const { repos } = React.useContext(ApiContext);

  return (
    <div className={`flex flex-col p-4 w-52 max-md:h-72 h-80  rounded-2xl mt-5 ${darkMode ? "darkBox" : "lightBox"}`}>
     take-note
     A Note/Task taking app!
     Typescript
     Updated 4 days ago
     take-note
     A Note/Task taking app!
     Typescript
     Updated 4 days ago
     take-note
     A Note/Task taking app!
     Typescript
     Updated 4 days ago
    </div>
  )
}