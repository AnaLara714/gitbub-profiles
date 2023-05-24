import React from "react";
import axios from "axios";
import { DataUser } from "../config/interface";

const URL = "https://api.github.com/users";

interface IApi {
  user: DataUser | undefined,
  repos: never[],
  following: never[],
  stars: never[],
  starsNumber: number,
  followers: never[],
  seeMore: never[],
  titleSeeMore: string,
  getSeeMore: (user: any) => any | undefined;
  getUser: (user: any) => void;
  getRepos: (user: any) => void;
  getFollowing: (user: any) => void;
  getStars: (user: any) => void;
  getFollowers: (user: any) => void;
};

interface IApiProviderProps {
  children: React.ReactNode;
};

export const ApiContext = React.createContext<IApi>({} as IApi, );

export const ApiProvider: React.FC<IApiProviderProps> = ({children}) => {
  const [user, setUser] = React.useState();
  const [repos, setRepos] = React.useState([]);
  const [following, setFollowing] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);
  const [stars, setStars] = React.useState([]);
  const [starsNumber, setStarsNumber] = React.useState(0);
  const [seeMore, setSeeMore] = React.useState([]);
  const [titleSeeMore, setTitleSeeMore] = React.useState("");

  function getUser(user: any) {
    axios.get(`${URL}/${user}`)
    .then(response => {
      setUser(response.data);
    })
  .catch(error => alert("usuario nao existe"))
  }
  
  function getRepos(user:any) {
    axios.get(`${URL}/${user}/repos`)
    .then(response => {
      setRepos(response.data);
    })
  }

  function getFollowing(user:any) {
    axios.get(`${URL}/${user}/following`)
    .then(response => {
      setFollowing(response.data);
    })
  }

  function getFollowers(user:any) {
    axios.get(`${URL}/${user}/followers`)
    .then(response => {
      setFollowers(response.data);
    })
  }

  function getStars(user:any) {
    axios.get(`${URL}/${user}/starred`)
    .then(response => {
      setStars(response.data);
      setStarsNumber(response.data.length);
    })
  }

  function getSeeMore(click:any) {
    switch (click) {
      case repos:
        setTitleSeeMore("Repositórios: ");
        break;
      case followers:
        setTitleSeeMore("Seguidores: ");
        break;
      case following:
        setTitleSeeMore("Seguindo: ");
        break;
      case stars:
        setTitleSeeMore("Favoritos: ");
        break;
      default:
        break;
    }
    setSeeMore(click);
  }
  
  return (
    <ApiContext.Provider value={{
      getUser,
      getRepos,
      getFollowers,
      getStars,
      getFollowing,
      getSeeMore,
      user,
      repos,
      followers,
      stars,
      starsNumber,
      following,
      seeMore,
      titleSeeMore
    }}>
      {children}
    </ApiContext.Provider>
  )
}

