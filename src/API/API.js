import axios from "axios";

export let GetUsers = (CurrentPage=4000,PageSize=5)=>{
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${CurrentPage}&count=${PageSize}&limit=50`,
  {
    withCredentials:true
  }).then(response=> response.data)
}