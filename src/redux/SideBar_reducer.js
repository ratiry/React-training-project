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
    case "Friends":
      return State
    
    default:
      return State
  }
} 
export const Friends_action_creator =()=>{
  return{
    type:'Friends'
  }
}