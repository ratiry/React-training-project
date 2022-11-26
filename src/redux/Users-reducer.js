

const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const CHANGE_CURRENT_PAGE='ChangeCurrentPage';
const SET_USERS = 'SetUsers';
const TotalCount = 'TotalCount';
const BUTTON_BACKWARD = 'buttonBackward';
const BUTTON_FORWARD = 'buttonForward';
const SET_PAGES= 'SetPages';
const IsFetching_const='IsFetching';
const FOLLOWING_IS_IN_PROGRESS = 'FOLLOWING_IS_IN_PROGRESS';
let initialization = {
  Users_array:[],
  PageSize:5,
  TotalUsersCount:0,
  CurrentPage:4290,
  BeforeCurrentPageArray:[],
  AfterCurrentPageArray:[],
  LengthPageArray:15,
  IsFetching:false,
  IsfollowingInProgress:[]
}
export let followingInProgress=(IsfollowingInProgress,id)=>{
  return{
    type:FOLLOWING_IS_IN_PROGRESS,
    IsfollowingInProgress,
    id
  }
}
export let IsFetching_action =(IsFetching)=>{
  return{
    type:IsFetching_const,
    IsFetching
  }
}
export let SetPages=()=>{
  return{
    type:SET_PAGES
  }
}
export let buttonBackward= ()=>{
  return{
    type:BUTTON_BACKWARD
  }
}
export let buttonForward= ()=>{
  return{
    type:BUTTON_FORWARD
  }
}
export let follow = (id)=>{
  return{
    type:FOLLOW,
    id:id
  }
}

export let unfollow = (id)=>{
  return{
    type:UNFOLLOW,
    id:id
  }
}
export let setUsers = (Users_array)=>{
  return{
    type:SET_USERS,
    Users_array:Users_array
  }
}
export let SetTotalCount = (TotalCount_)=>{
  return{
    type:TotalCount,
    TotalCount_
  }
}
export let SetCurrentPage=(CurrentPage)=>{
  return{
    type:CHANGE_CURRENT_PAGE,
    CurrentPage
  }
}
export const Users_reducer=(State=initialization,action)=>{
  switch(action.type){
      case FOLLOW:
        return {...State,
          Users_array:State.Users_array.map((u)=>{
            if(u.id===action.id){
              return {...u,followed:true}
            }else{
              return u
            }
          })    
        };

      case UNFOLLOW:
        
        return { ...State,
          Users_array:State.Users_array.map((u)=>{
            if(u.id ===action.id){
              return{...u,followed:false}
            }else{
              return u;
            }
          })
        }
      case SET_USERS:
        return{...State,Users_array:[ ...action.Users_array]}
        case CHANGE_CURRENT_PAGE:
          return{...State,CurrentPage:action.CurrentPage}
        case TotalCount:
          return{...State,TotalUsersCount:action.TotalCount_}
        case BUTTON_BACKWARD:
          return{...State,CurrentPage:State.CurrentPage-1}
        case BUTTON_FORWARD:
          return{...State,CurrentPage:State.CurrentPage+1}
        case SET_PAGES:
          let BeforeCurrentPageArray = [];
          let AfterCurrentPageArray = [];
          if(State.CurrentPage+State.LengthPageArray+1<=Math.ceil(State.TotalUsersCount/State.PageSize) ){
            for(let i=State.CurrentPage+1;i<State.CurrentPage+State.LengthPageArray;i++){
              AfterCurrentPageArray.push(i);
            }
          }else{
            for(let i=State.CurrentPage+1;i<=Math.ceil(State.TotalUsersCount/State.PageSize);i++){
              AfterCurrentPageArray.push(i);
            }
          }
          if(State.CurrentPage-State.LengthPageArray>0){
            for(let i=State.CurrentPage-State.LengthPageArray+1;i<State.CurrentPage;i++){
              BeforeCurrentPageArray.push(i);
            }
          }else{
            for(let i=1;i<State.CurrentPage;i++){
              BeforeCurrentPageArray.push(i);
            }
          }
          return {...State,AfterCurrentPageArray:AfterCurrentPageArray,BeforeCurrentPageArray:BeforeCurrentPageArray};
        case IsFetching_const:
          return{...State,IsFetching:action.IsFetching}
        case FOLLOWING_IS_IN_PROGRESS:
          
          return{
            ...State,
            IsfollowingInProgress:action.IsfollowingInProgress ?
              [...State.IsfollowingInProgress, action.id]:
              State.IsfollowingInProgress.filter((id)=>id!==action.id)
          }
      default :
        return State; 
  }
}