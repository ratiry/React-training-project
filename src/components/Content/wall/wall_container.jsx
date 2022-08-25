import Textarea_wall from './Textarea_wall/Textarea_wall.jsx';
import Post from './post/Post';
import classes from './wall.module.scss';
import Wall from './wall';
import {addChangeNewPostTextActionCreator,addPostActionCreator } from './../../../redux/Wall-reducer';
let Wall_container = function(props){
  let addPost_0 =()=>{
    props.Store.dispatch(addPostActionCreator());
  }
  let Textarea_altering=(text)=>{
    props.Store.dispatch(addChangeNewPostTextActionCreator(text));
  }
  return(
    <Wall  Wall={props.Store.getState().Wall} addPost_0={addPost_0} Textarea_altering={Textarea_altering}  />
  );
}
export default Wall_container;
