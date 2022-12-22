import { GetProfile_API } from "../API/API";

const ADD_POST='ADD-POST';
const SET_STATUS = 'SET_STATUS';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE='SET_USER_PROFILE';
let initialization ={
  DataPosts:[
    {message:'dgddg', Likes:1500, id:1},
    {message:'fgfgf',Likes :10, id:2},
    {message:'ggggg',Likes:0, id:3},
  ],
  status:'',
  profile:null,
  allContactsAreUnderfined:'I do not want to share my contacts!!!'
}
export let UpdateStatusThunk=(status)=>(dispatch)=>{
  GetProfile_API.Update_Status(status).then(response=>{
    if(response.data.resultCode==0){
      dispatch(SetStatus(status));
    }
  })
}
export let GetStatusThunk=(id)=>(dispatch)=>{
  GetProfile_API.GetStatus(id).then(response=> {
    dispatch( SetStatus(response.data));
  })
}
export let GetProfileThunk=(id)=>(dispatch)=>{
  GetProfile_API.Get_Profile(id).then(response=> {
    dispatch( SetUserProfile(response.data));
  })
}

export const Wall_reducer=(State=initialization,action)=>{

  switch(action.type){
    case ADD_POST:
      let post={
        message:action.value,
        Likes:0,
        id:4
      }
      return {
        ...State,
        DataPosts:[...State.DataPosts, post],
        new_text:''
      };
    
    case CHANGE_NEW_POST_TEXT:
      return {
        ...State,
        new_text:action.value
      };
    case SET_USER_PROFILE:

      return {...State,profile:action.data}
    case SET_STATUS:
      return{...State,
        status:action.status}
      default :
        return State; 
  }
}
export let addPostActionCreator=(value)=>{
  return{
    type: ADD_POST,
    value
  }
 }
 export let SetStatus=(status)=>({
    type:SET_STATUS,
    status
 })
 export let SetUserProfile=(data)=>{
  return{
    type:SET_USER_PROFILE,
    data
  }
 }
