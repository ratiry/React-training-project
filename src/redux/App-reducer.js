import { GetAuthThunk } from "./auth_reducer"; 
const INITIALIZED_SUCSESS = 'SET_INITIALIZED';
let intialization={
  IsIninitialized:false
}
export let Initialized_sucsess=()=>{
  return{
    type:INITIALIZED_SUCSESS
  }
}

export let App_reducer=(State=intialization,action)=>{
  switch(action.type){
    case INITIALIZED_SUCSESS:
      return{
        ...State,
        IsIninitialized:true
      }
    default:
      return State
  }
}
export let Initialize_App_Thunk=()=>(dispatch)=>{
  
  let promise = dispatch(GetAuthThunk());
  promise.then(()=>{
    dispatch(Initialized_sucsess());
  })
}