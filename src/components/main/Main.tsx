import React, { useEffect } from "react"
import "./InputSearch.style.css";
import { ProfileInformation } from "../profileInformation/profileInformation"
import { ProfileRepositories } from "../profileRepositories/profileRepositories"
import { ProfileStatistics } from "../profileStatistics/profileStatistics"
import getUser from '../../service/api'
import { ApiContext } from "../../context/apiContext";


export const Main: React.FC = () => {
  const [userName, setUserName] = React.useState("");
  const [userSearch, setUserSearch] = React.useState("");
  // const [data, setData] = React.useState([])

  const { getUser, getRepos, getFollowers, getFollowing, getStars,
         followers, user, repos, following, stars } = React.useContext(ApiContext);

  const SearchUser = () => {
    setUserSearch(userName);
    getUser(userSearch)
    getFollowers(userSearch)
    getFollowing(userSearch)
    getStars(userSearch)
    console.log("usuario:", user)
    console.log("rpositorios:", repos)
    console.log("seguindo:", following)
    console.log("seguidores:", followers)
    console.log("favoritos:",  stars)
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getUser(userSearch)
  //   }
  //   fetchData();
  // }, [userSearch])

  return (
    <div className={`max-sm:h-[48rem] h-screen w-full mx-auto p-2 flex flex-col items-center gap-y-8`}>
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
{/* <>
            <ProfileInformation/>
            <div className={`flex flex-col`}>
              <ProfileStatistics/>
              
             </div>
           </> */}
       
      <div className="flex flex-row justify-center w-full flex-wrap gap-y-6 gap-x-36 mb-8">
        {/* {data?.map(function(information) {
          return (
            console.log(information.name)
            )
          }
        )} */}
           <ProfileRepositories/>
      </div>
    </div>
  )
}