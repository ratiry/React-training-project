import axios from "axios";
let instance = axios.create({
  withCredentials:true,
  baseURL:'https://social-network.samuraijs.com/api/1.0/',
  headers:{'API-KEY':'339cb088-fb45-4a92-a140-17568b7eb47d'}
})
export let USERS_API= {
  GetUsers  (CurrentPage=4000,PageSize=5){
    ;
    let items = instance.get(`users?page=${CurrentPage}&count=${PageSize}&limit=50`,).then(response=> response.data);
    return items;
  },
  delete_follow(id){
    return instance.delete(`follow/${id}`)
  },
  post_follow(id){
    return instance.post(`follow/${id}`)
  }
}
