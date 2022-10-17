

const follow = 'follow';
const unfollow = 'unfollow';
const ChangeCurrentPage='ChangeCurrentPage';
const SetUsers = 'SetUsers';
const TotalCount = 'TotalCount';
const buttonBackward = 'buttonBackward';
const buttonForward = 'buttonForward';
const SetPages= 'SetPages';
let initialization = {
  Users_array:[],
  PageSize:5,
  TotalUsersCount:0,
  CurrentPage:4250,
  BeforeCurrentPageArray:[],
  AfterCurrentPageArray:[],
  LengthPageArray:5
}
export let SetPagesAC=()=>{
  return{
    type:SetPages
  }
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
        case SetPages:
          let BeforeCurrentPageArray = [];
          let AfterCurrentPageArray = [];
          if(State.CurrentPage+State.LengthPageArray+1<=Math.ceil(State.TotalUsersCount/State.PageSize) ){
            for(let i=State.CurrentPage+1;i<State.CurrentPage+State.LengthPageArray;i++){
              AfterCurrentPageArray.push(i);
            }
          }else{
            alert(Math.ceil(State.TotalUsersCount/State.PageSize)-State.CurrentPage);
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
      default :
        return State; 
  }
}