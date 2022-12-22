let CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
let ADD_MESSAGE = 'ADD-MESSAGE';
let initialization={
  dataUsers:[
    {name:'Jem',id:1},
    {name:'Jack',id:2},
    {name:'Jerry',id:3},
    {name:'Quizzy',id:4, },
  ],
  dataMessages:[
    { message:'Hi' , whose:'my',Name:'Name'},
    { message:'Hi' , whose:'my',Name:'Name'},
    { message:'Hi' , whose:'my',Name:'Name'},
    { message:'gibberish', whose:'coversator',Name:'Name'},
    { message:'fdghj', whose:'conversator', Name:'Name'},
  ],
}
export const Dialogs_reducer=(State=initialization,action)=>{
 switch(action.type){
    case ADD_MESSAGE:
      debugger;
      let newMessage={
        message:action.value,
        whose:'my',
        Name:'Name'
      }
      return {
        ...State,
        dataMessages:[...State.dataMessages,newMessage],
        new_text_Dialogs:''
      };
    case CHANGE_NEW_MESSAGE_TEXT:   
      return {
        ...State,
        new_text_Dialogs:action.value
      };
    default:
     return State;
 }
}
export let addMessageActionCreator=(value)=>{
  return{
    type:ADD_MESSAGE,
    value
  }
 } 
 