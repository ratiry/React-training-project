

const follow = 'follow';
const unfollow = 'unfollow';
const SetUsers = 'SetUsers';
let initialization = {
  Users_array:[
    {id:1,followed:false,name:'Slava',description:'learing React', location:{country:'Russia',city:'Chicago'}, photoURL:'https://u.foxford.ngcdn.ru/uploads/avatars/user/avatar/7462645/retina_d4b6b2326c37010d.jpg'},
    {id:2,followed:true,name:'Steve',description:'dwelling in Tailnand', location:{country:'Elngland',city:'CarrickFergus'}, photoURL:'https://a.foxford.ngcdn.ru/assets/fallback/avatars/faceholders/120x120/114-8e3063d9e24977b2a1f91881eab4311a5f183c71e3efb1d830c42446432d13e0.png'},
    {id:3,followed:false,name:'Nastya',description:' NoNe', location:{country:'Russia',city:'Moscow'}, photoURL:'https://u.foxford.ngcdn.ru/uploads/avatars/user/avatar/7462645/retina_d4b6b2326c37010d.jpg'},
    
  ]
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
export let setUsersAC = (Users)=>{
  return{
    type:SetUsers,
    Users:Users
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
        return{...State,Users:[...State.Users_array , ...action.Users]}
      default :
        return State; 
  }
}