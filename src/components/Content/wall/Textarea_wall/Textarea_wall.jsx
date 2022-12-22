import classes from './Textarea_wall.module.scss';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
let TextareaForm=(props)=>{
  return(
    <form  className={classes.textarea_container} onSubmit={props.handleSubmit}>
      <p className={classes.offer_to_write}>Write your own gibberish</p>
      <Field  component={'textarea'} name={'newPost'}></Field>
      <button>send</button>
  </form>
  )
}
TextareaForm=reduxForm({form:'newPostForm'})(TextareaForm);
function Textarea_wall(props){
  let addPost_0 =(value)=>{
    props.addPost_0(value.newPost)
  }
  return(
    <TextareaForm onSubmit={addPost_0}/>
  );
};

export default Textarea_wall;