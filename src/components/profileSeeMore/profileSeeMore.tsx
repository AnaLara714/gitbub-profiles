import React from "react";
import "../profileStatistics/profileStatistics.css"
import { ThemeChangeContext } from "../../context/ThemeChangeContext";
import { ApiContext } from "../../context/apiContext";

export const ProfileSeeMore: React.FC = () => {
  const {darkMode} = React.useContext(ThemeChangeContext);
  const { getUser, getSeeMore, getFollowers, getFollowing, getStars, getRepos,
          seeMore, titleSeeMore, } = React.useContext(ApiContext);

  const open = (otherProfile: string) => {
    console.log(otherProfile)
    getUser(otherProfile)
    getUser(otherProfile)
    getFollowers(otherProfile)
    getFollowing(otherProfile)
    getStars(otherProfile)
    getRepos(otherProfile)
    getSeeMore("")
  }
  
  return (
    <div className={`flex flex-col p-4 w-52 max-md:h-max h-max rounded-lg mt-5 ${darkMode ? "darkBox" : "lightBox"}`}>
     {seeMore.length === 0 ? <p>Escolha(clicando no olhinho de cima) um item que você quer ver aqui!</p>
     : <> 
        {titleSeeMore}
        {seeMore.map((infos: any) => 
          (<>    
            {titleSeeMore === "Repositórios: " || titleSeeMore === "Favoritos: " ? 
              <a href={infos.html_url} target="_blank" className="break-all"> 
                • {infos.name}
              </a>
              : <label className="cursor-pointer" onClick={() => open(infos.login)}> 
              • {infos.login}
                </label>
              }
          </>))
        } 
        </>
      }
    </div>
  )
}