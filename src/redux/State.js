
import { rerenderEntireTree } from './../rerender';
let State ={
  Wall:{
    DataPosts:[
      {message:'dgddg', Likes:1500, id:1},
      {message:'fgfgf',Likes :10, id:2},
      {message:'ggggg',Likes:0, id:3},
    ],
    new_text:'TTTTTTTRRRRRRRRRRRRRDDDDDDDD',
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
      { message:'gibberish', whose:'coversator',Name:'Name'},
      { message:'fdghj', whose:'conversator', Name:'Name'},
    ],
  },
}


export let addPost =(Message)=>{
  let post={
    message:Message,
    Likes:0,
    id:4
  }
  State.Wall.DataPosts.push(post);
  rerenderEntireTree(State);
}

export default State;