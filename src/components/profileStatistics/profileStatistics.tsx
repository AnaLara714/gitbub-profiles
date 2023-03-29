import React from "react";
import DarkOn from "../../assets/icon/seeMoreDark.png";
import DarkOff from "../../assets/icon/seeMoreLight.png";
import "../profileStatistics/profileStatistics.css"
import { ThemeChangeContext } from "../../context/ThemeChangeContext";
import { ApiContext } from "../../context/apiContext";

export const ProfileStatistics: React.FC = () => {
  const {darkMode} = React.useContext(ThemeChangeContext);
  const { user, repos, starsNumber, stars, followers, following, getSeeMore } = React.useContext(ApiContext);

  const SeeMoreRepos = () => 
      getSeeMore(repos);
  const SeeMoreFollowers = () => 
      getSeeMore(followers);
  const SeeMoreFollowing = () => 
      getSeeMore(following);
  const SeeMoreStars = () => 
      getSeeMore(stars);

  return (
    <div className={`flex direction-column flex-col p-4 w-52 rounded-lg ${darkMode ? "darkBox" : "lightBox"}`}>
      <span className="flex justify-between">
        <label>Repositorios</label>
        <label className="flex flex-row gap-x-2 cursor-pointer">
          {user?.public_repos}
          <img src={darkMode ? DarkOn : DarkOff} onClick={SeeMoreRepos}/>
        </label>
      </span>
      <span className="flex justify-between cursor-pointer" >
        <label className="cursor-pointer">Seguidores</label>
        <label className="flex flex-row gap-x-2 cursor-pointer">
          {user?.followers}
          <img src={darkMode ? DarkOn : DarkOff} onClick={SeeMoreFollowers}/>
        </label>
      </span>
      <span className="flex justify-between cursor-pointer" >
        <label className="cursor-pointer">Seguindo</label> 
        <label className="flex flex-row gap-x-2 cursor-pointer">
          {user?.following}
          <img src={darkMode ? DarkOn : DarkOff}onClick={SeeMoreFollowing}/>
        </label>
      </span>
      <span className="flex justify-between cursor-pointer">
        <label className="cursor-pointer">Favoritos</label> 
        <label className="flex flex-row gap-x-2 cursor-pointer">
          {starsNumber}
          <img src={darkMode ? DarkOn : DarkOff} onClick={SeeMoreStars}/>
        </label>
      </span>
    </div>
  )
}