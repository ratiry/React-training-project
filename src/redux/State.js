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
  dispatch(){},
  subscribe(observer){
    this._rerenderEntireTree = observer;
  },
  addPost(){
    // debugger;
    let post={
      message:this._State.Wall.new_text,
      Likes:0,
      id:4
    }
    this._State.Wall.DataPosts.push(post);
    this.changeNewPostText('');
    this._rerenderEntireTree(this._State);
  },
  addMessage(){
    let newMessage={
      message:this._State.Dialogs.new_text_Dialogs,
      whose:'my',
      Name:'Name'
    }
    this._State.Dialogs.dataMessages.push(newMessage);
    this.changeNewMessageText('')
    this._rerenderEntireTree(this._State)
  },
  changeNewPostText(value){
    this._State.Wall.new_text=value;
    this._rerenderEntireTree(this._State); 
  },
  changeNewMessageText(value){
    this._State.Dialogs.new_text_Dialogs=value;
    this._rerenderEntireTree(this._State);
  },

}

Window.Store = Store;
export default Store;