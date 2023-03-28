import React, { createContext, useEffect } from 'react';
import axios from "axios";

const URL = "https://api.github.com/users";

interface IApi {
  user: never[],
  repos: never[],
  following: never[],
  stars: never[],
  followers: never[],
  getUser: (user: any) => void;
  getRepos: (user: any) => void;
  getFollowing: (user: any) => void;
  getStars: (user: any) => void;
  getFollowers: (user: any) => void;
};

interface IApiProviderProps {
  children: React.ReactNode;
}
export const ApiContext = React.createContext<IApi>({} as IApi, );

export const ApiProvider: React.FC<IApiProviderProps> = ({children}) => {
  const [user, setUser] = React.useState([]);
  const [repos, setRepos] = React.useState([]);
  const [following, setFollowing] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);
  const [stars, setStars] = React.useState([]);

  function getUser(user: any) {
    axios.get(`${URL}/${user}`)
    .then(async response => {
      setUser(response.data);
    })
    .catch(error => console.log(error))
  }

  function getRepos(user:any) {
    axios.get(`${URL}/${user}/repos`)
    .then(response => {
      setRepos(response.data)
    })
  }

  function getFollowing(user:any) {
    axios.get(`${URL}/${user}/following`)
    .then(response => {
      setFollowing(response.data)
    })
  }

  function getFollowers(user:any) {
    axios.get(`${URL}/${user}/followers`)
    .then(response => {
      setFollowers(response.data)
    })
  }

  function getStars(user:any) {
    axios.get(`${URL}/${user}/starred`)
    .then(response => {
      setStars(response.data)
    })
  }

  
  return (
    <ApiContext.Provider value={{
      getUser,
      getRepos,
      getFollowers,
      getStars,
      getFollowing,
      user,
      repos,
      followers,
      stars,
      following
    }}>
      {children}
    </ApiContext.Provider>
  )
}

