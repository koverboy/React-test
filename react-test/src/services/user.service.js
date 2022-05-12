import axios from "axios";

function getUser() {
  axios.get('http://localhost:3001/api/v2/user/me').then((res) => {
    console.log(res);
  });
}

export {getUser}