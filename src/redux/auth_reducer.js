import { auth_API } from "../API/API";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA';
const IsFetching_const='IsFetching';
let initialization = {
  email:null,
  login:null,
  userId:null,
  IsAuth:false,
  IsFetching:false
}
export let GetAuthThunk=()=>(dispatch)=>{
  dispatch(IsFetching_action(true));
  return auth_API.GetAuth().then(response=> {
    if(response.data.resultCode ==0){
      dispatch( IsFetching_action(false));
      dispatch(set_data_user(response.data.data.email,response.data.data.login,response.data.data.id,true));
    }else{
      dispatch( IsFetching_action(false));
      dispatch(set_data_user(false,false,false,false));
    }
  })
}
export let LoginThunk=(email,password,rememberMe)=>(dispatch)=>{
  dispatch(IsFetching_action(true));  
  auth_API.Login(email,password,rememberMe).then(response=>{
    if(response.data.resultCode ==0){
      dispatch(GetAuthThunk());
      dispatch(IsFetching_action(false));
    }else{
      dispatch(IsFetching_action(false));
      let action = stopSubmit('Login',{_error:response.data.messages[0]});
      dispatch(action);
    }
  })
}
export let LogoutThunk=()=>(dispatch)=>{
  dispatch(IsFetching_action(true));  
  auth_API.Logout().then(response=>{
    if(response.data.resultCode ==0){
      dispatch(set_data_user('none','none','none',false))
      dispatch(IsFetching_action(false));  
    }else{
      dispatch(IsFetching_action(false));  
    }
  })
}
export let IsFetching_action =(IsFetching)=>{
  return{
    type:IsFetching_const,
    IsFetching
  }
}
export let set_data_user = (email,login,userId,IsAuth)=>{
  return{
    type:SET_USER_DATA,
    data:{email,login,userId,IsAuth}
  }
}
export const auth_reducer=(State=initialization,action)=>{
  switch(action.type){
      case SET_USER_DATA:
        return{
          ...State,
          ...action.data
        }
      case IsFetching_const:
        return{
          ...State,
          IsFetching:action.IsFetching
        }
      default :
        return State; 
  }
}