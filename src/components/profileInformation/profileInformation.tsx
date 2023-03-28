import React from "react";
import { ApiContext } from "../../context/apiContext";

export const ProfileInformation: React.FC = () => {


  return (
    <div className={`flex flex-col `}>
      <img 
        src="https://avatars.githubusercontent.com/u/95003755?v=4" 
        className="rounded-full w-52" alt="foto do perfil do github"/>
      <h1 className="text-xl">name</h1>
      <h5 className="italic text-base">login</h5>
      <span>bio</span>
    </div>
  )
}