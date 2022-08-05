
import { rerenderEntireTree } from './../rerender';
let State ={
  Wall:{
    DataPosts:[
      {message:'dgddg', Likes:1500, id:1},
      {message:'fgfgf',Likes :10, id:2},
      {message:'ggggg',Likes:0, id:3},
    ],
    new_text:'',
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
}
Window.State=State;


export let addPost =()=>{
  let post={
    message:State.Wall.new_text,
    Likes:0,
    id:4
  }
  State.Wall.DataPosts.push(post);
  changeNewPostText('');
  rerenderEntireTree(State);
}
export let addMessage=()=>{
  let newMessage={
    message:State.Dialogs.new_text_Dialogs,
    whose:'my',
    Name:'Name'
  }
  State.Dialogs.dataMessages.push(newMessage);
  changeNewMessageText('')
  rerenderEntireTree(State);
}
export let changeNewPostText=(value)=>{
 State.Wall.new_text=value;
 console.log(State);
 rerenderEntireTree(State); 
}
export let changeNewMessageText=(value)=>{
  State.Dialogs.new_text_Dialogs=value;
  rerenderEntireTree(State);
}
export default State;