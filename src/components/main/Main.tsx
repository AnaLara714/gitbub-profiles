import React from "react"
import "./InputSearch.style.css";
import { ProfileInformation } from "../profileInformation/profileInformation";
import { ProfileSeeMore } from "../profileSeeMore/profileSeeMore";
import { ProfileStatistics } from "../profileStatistics/profileStatistics";
import { ApiContext } from "../../context/apiContext";


export const Main: React.FC = () => {
  const [userName, setUserName] = React.useState("");
  const [research, setresearch] = React.useState(false);

  const { getUser, getRepos, getFollowers, getFollowing, getStars, getSeeMore, 
          seeMore} = React.useContext(ApiContext);

  const SearchUser = () => {
    setresearch(true);
    getUser(userName)
    getFollowers(userName)
    getFollowing(userName)
    getStars(userName)
    getRepos(userName)
    getSeeMore("")
    setUserName("")
  }
  
  return (
    <div className={`${seeMore.length === 0 ? "max-sm:h-max mb-12": "max-sm:h-max lg:h-max md:h-max  mb-24"} 
    ${seeMore.length <= 20 ? "md:h-screen xl:h-screen" : "" } h-screen w-full mx-auto p-2 flex flex-col items-center gap-y-8`}>
      <div className="w-full flex justify-center">
        <input
          className="inputName p-1 w-1/2 max-sm:w-64" 
          placeholder="Nome do usuário"
          value={userName}
          onChange={(evt) => setUserName(evt.target.value)}
        />
        <button
          className="rounded-full buttonSearch"
          onClick={SearchUser}
        >🔍</button>
      </div>
      {research ? 
      <div className="flex flex-row justify-center w-full flex-wrap gap-y-6 gap-x-36 mb-8">
        <ProfileInformation />
          <div className={`flex flex-col`}>
            <ProfileStatistics/>
            <ProfileSeeMore/>
          </div>
      </div>
      : <p>Faça uma pesquisa!</p>}
    </div>
  )
}