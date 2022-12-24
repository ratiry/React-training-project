import { auth_API } from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';
const IsFetching_const='IsFetching';
let initialization = {
  email:null,
  login:null,
  userId:null,
  IsAuth:'none',
  IsFetching:false
}
export let GetAuthThunk=()=>(dispatch)=>{
  dispatch(IsFetching_action(true));
  auth_API.GetAuth().then(response=> {
    if(response.data.resultCode ==0){
      dispatch( IsFetching_action(false));
      dispatch(set_data_user(response.data.data.email,response.data.data.login,response.data.data.id));
    }else{
      dispatch(set_data_user('none','none','none'));
      
    }
  })
}
export let LoginThunk=(email,password,rememberMe)=>(dispatch)=>{
  dispatch(IsFetching_action(true));  
  auth_API.Login(email,password,rememberMe).then(response=>{
    if(response.data.resultCode ==0){
      dispatch(GetAuthThunk())
    }
  })
}
export let LogoutThunk=()=>(dispatch)=>{
  dispatch(IsFetching_action(true));  
  auth_API.Logout().then(response=>{
    if(response.data.resultCode ==0){
      dispatch(GetAuthThunk())
    }
  })
}
export let IsFetching_action =(IsFetching)=>{
  return{
    type:IsFetching_const,
    IsFetching
  }
}
export let set_data_user = (email,login,userId)=>{
  return{
    type:SET_USER_DATA,
    data:{email,login,userId}
  }
}
export const auth_reducer=(State=initialization,action)=>{
  switch(action.type){
      case SET_USER_DATA:
        let IsAuth=false;
        if(action.data.email!=='none'){
          IsAuth=true;
        }else{
          IsAuth=null;
        }
        return{
          ...State,
          IsAuth:IsAuth,
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