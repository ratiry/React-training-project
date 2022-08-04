import classes from './Textarea_wall.module.scss';
import React from 'react';
function Textarea_wall(props){
  let textarea = React.useRef();
  let addPost_0 =()=>{
    let text= textarea.current.value;
    props.addPost(text);
    textarea.current.value='';
  }
  let Textarea_altering=()=>{
  }
  return(
    <div className={classes.textarea_container}>
      <p className={classes.offer_to_write}>Write your own gibberish</p>
      <textarea ref={textarea} onChange={Textarea_altering} value={props.new_text} ></textarea>
      <button onClick={addPost_0}>send</button>
  </div>
  );
};
export default Textarea_wall;