import classes from './Textarea_wall.module.scss';
import React from 'react';
import { addChangeNewPostTextActionCreator,addPostActionCreator } from './../../../../redux/Wall-reducer';
function Textarea_wall(props){
  let textarea = React.useRef();
  let addPost_0 =()=>{
    props.dispatch(addPostActionCreator());
  }
  let Textarea_altering=()=>{
    props.dispatch(addChangeNewPostTextActionCreator(textarea.current.value));
  }
  return(
    <div className={classes.textarea_container}>
      <p className={classes.offer_to_write}>Write your own gibberish</p>
      <textarea ref={textarea} onChange={Textarea_altering}  value={props.new_text} ></textarea>
      <button onClick={addPost_0}>send</button>
  </div>
  );
};
export default Textarea_wall;