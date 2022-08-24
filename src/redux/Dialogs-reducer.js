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
  new_text_Dialogs:''
}
export const Dialogs_reducer=(State=initialization,action)=>{
 switch(action.type){
    case ADD_MESSAGE:
      let newMessage={
        message:State.new_text_Dialogs,
        whose:'my',
        Name:'Name'
      }
      State.dataMessages.push(newMessage);
      State.new_text_Dialogs='';
      return State;
    case CHANGE_NEW_MESSAGE_TEXT:
      State.new_text_Dialogs=action.value;
      return State;
    default:
     return State;
 }
}
export let addMessageActionCreator=()=>{
  return{
    type:ADD_MESSAGE,
  }
 } 
 export let changeNewMessageText=(value)=>{
  return{
    type:CHANGE_NEW_MESSAGE_TEXT,
    value:value
  }
 }