
const DELETE_FRIEND = 'delete_friend';
let initialization = {
  Friends:[
    {name:'Fabric',id:1},
    {name:'FRiend',id:2},
    {name:'Frenemy',id:3},
  ],
  Links:[
    {to:'/Wall',name:'Wall'},
    {to:'/Dialogs',name:'Dialogs'},
    {to:'/Users',name:'Users'},
    
  ]
}
export const SideBar_reducer=(State=initialization,action)=>{
  switch(action.type){
    case DELETE_FRIEND:
      return {...State,Friends:State.Friends.filter(  (item,index)=>{
        return item.id !==action.id})}
    default:
      return State
  }
} 
export const Delete_Friend=(id)=>{
  return{
    type:DELETE_FRIEND,
    id
  }
}
export const Friends_action_creator =()=>{
  return{
    type:'Friends'
  }
}