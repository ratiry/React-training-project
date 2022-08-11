let ADD_POST='ADD-POST';
let CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
let CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
let ADD_MESSAGE = 'ADD-MESSAGE';
let Store={
  _State :{
   Wall:{
     DataPosts:[
       {message:'dgddg', Likes:1500, id:1},
       {message:'fgfgf',Likes :10, id:2},
       {message:'ggggg',Likes:0, id:3},
     ],
     new_text:'hh',
   },
   Dialogs:{
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
   },
 },
 _rerenderEntireTree(){},
 getState(){
   return this._State;
 },
 dispatch(action){
   if(action.type===ADD_POST){
     this._addPost();
   }else if(action.type===CHANGE_NEW_POST_TEXT){
    this._changeNewPostText(action.value); 
   }else if(action.type===ADD_MESSAGE){
     this._addMessage();
   }else if(action.type ===CHANGE_NEW_MESSAGE_TEXT){
     this._changeNewMessageText(action.value);
   }
 },
 subscribe(observer){
   this._rerenderEntireTree = observer;
 },
 _addPost(){
   let post={
     message:this._State.Wall.new_text,
     Likes:0,
     id:4
   }
   this._State.Wall.DataPosts.push(post);
   this._changeNewPostText('');
   this._rerenderEntireTree(this._State);
 },
 _addMessage(){
   let newMessage={
     message:this._State.Dialogs.new_text_Dialogs,
     whose:'my',
     Name:'Name'
   }
   this._State.Dialogs.dataMessages.push(newMessage);
   this._changeNewMessageText('')
   this._rerenderEntireTree(this._State)
 },
 _changeNewPostText(value){
   this._State.Wall.new_text=value;
   this._rerenderEntireTree(this._State); 
 },
 _changeNewMessageText(value){
   this._State.Dialogs.new_text_Dialogs=value;
   this._rerenderEntireTree(this._State);
 },

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
export let addPostActionCreator=()=>{
 return{
   type: ADD_POST
 }
}
export let addChangeNewPostTextActionCreator=(value)=>{
 return{
   type: CHANGE_NEW_POST_TEXT,
   value:value,
 }
}
Window.Store = Store;
export default Store;