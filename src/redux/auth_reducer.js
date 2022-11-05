

const SET_USER_DATA = 'SET_USER_DATA';
const IsFetching_const='IsFetching';
let initialization = {
  email:null,
  login:null,
  userId:null
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
        return{
          ...State,
          ...action.data
        }
      default :
        return State; 
  }
}