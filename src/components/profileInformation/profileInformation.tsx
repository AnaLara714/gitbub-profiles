import React from "react";
import { ApiContext } from "../../context/apiContext";
import { ThemeChangeContext } from "../../context/ThemeChangeContext";

export const ProfileInformation: React.FC = ( ) => {
  const {darkMode} = React.useContext(ThemeChangeContext);
  const { user } = React.useContext(ApiContext);

  return (
    <div className={`flex flex-col w-52`}>
      <img src={user?.avatar_url} 
        className="rounded-full w-52" alt="foto do perfil do github"/>
      <h1 className="text-xl mt-2">{user?.name}</h1>
      <h5 className="italic text-base">@{user?.login}</h5>
      <span className="w-[18rem] max-md:w-52">{user?.bio}</span>
      <button className={`max-md:w-52 rounded-lg mt-4 h-9 ${darkMode ? "darkBox" : "lightBox"}`}>
        <a href={user?.html_url} target="_blank">Encontrar no Github</a> 
      </button> 
    </div>
  )
}