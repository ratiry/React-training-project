
import { Dialogs_reducer } from './Dialogs-reducer';
import { Wall_reducer } from './Wall-reducer';
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
 subscribe(observer){
  this._rerenderEntireTree = observer;
},
 _rerenderEntireTree(){},
 getState(){
   return this._State;
 },
 dispatch(action){
  this._State.Wall= Wall_reducer(this._State.Wall,action);
  this._State.Dialogs= Dialogs_reducer(this._State.Dialogs,action);
  this._rerenderEntireTree(this._State);
 },
}
Window.Store = Store;
export default Store;