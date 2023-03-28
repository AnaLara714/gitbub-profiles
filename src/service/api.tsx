import axios from "axios";
const URL = "https://api.github.com/users";

function getUser(user: any) {
    axios.get(`${URL}/${user}`)
    .then(response => {
      const data = response.data
    })
    .catch(error => console.log(error))
}

export default getUser;