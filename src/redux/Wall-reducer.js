let ADD_POST='ADD-POST';
let CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
export const Wall_reducer=(State,action)=>{
  switch(action.type){
    case ADD_POST:
      let post={
        message:State.new_text,
        Likes:0,
        id:4
      }
      State.DataPosts.push(post);
      State.new_text='';
      return State;
      case CHANGE_NEW_POST_TEXT:
        State.new_text=action.value;
        return State;
      default :
        return State; 
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