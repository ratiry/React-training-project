

const follow = 'follow';
const unfollow = 'unfollow';
const ChangeCurrentPage='ChangeCurrentPage';
const SetUsers = 'SetUsers';
const TotalCount = 'TotalCount';
const buttonBackward = 'buttonBackward';
const buttonForward = 'buttonForward';
let initialization = {
  Users_array:[],
  PageSize:5,
  TotalUsersCount:0,
  CurrentPage:1,
  BeforeCurrentPageArray:[],
  AfterCurrentPageArray:[]
}
export let buttonBackwardAC= ()=>{
  return{
    type:buttonBackward
  }
}
export let buttonForwardAC= ()=>{
  return{
    type:buttonForward
  }
}
export let followAC = (id)=>{
  return{
    type:follow,
    id:id
  }
}

export let unfollowAC = (id)=>{
  return{
    type:unfollow,
    id:id
  }
}
export let setUsersAC = (Users_array)=>{
  return{
    type:SetUsers,
    Users_array:Users_array
  }
}
export let SetTotalCountAC = (TotalCount_)=>{
  return{
    type:TotalCount,
    TotalCount_
  }
}
export let SetCurrentPageAC=(CurrentPage)=>{
  return{
    type:ChangeCurrentPage,
    CurrentPage
  }
}
export const Users_reducer=(State=initialization,action)=>{
  switch(action.type){
      case follow:
        return {...State,
          Users_array:State.Users_array.map((u)=>{
            if(u.id===action.id){
              return {...u,followed:true}
            }else{
              return u
            }
          })    
        };

      case unfollow:
        
        return { ...State,
          Users_array:State.Users_array.map((u)=>{
            if(u.id ===action.id){
              return{...u,followed:false}
            }else{
              return u;
            }
          })
        }
      case SetUsers:
        return{...State,Users_array:[ ...action.Users_array]}
        case ChangeCurrentPage:
          return{...State,CurrentPage:action.CurrentPage}
        case TotalCount:
          return{...State,TotalUsersCount:action.TotalCount_}
        case buttonBackward:
          return{...State,CurrentPage:State.CurrentPage-1}
        case buttonForward:
          return{...State,CurrentPage:State.CurrentPage+1}
      default :
        return State; 
  }
}