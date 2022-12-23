import classes from './Textarea_wall.module.scss';
import React from 'react';
import { requiredField,maxLengthCreator,minLengthCreator } from '../../../../Utils/validations/validators';
import { reduxForm, Field } from 'redux-form';
let MaxLength10 = maxLengthCreator(10);
let MinLength5 = minLengthCreator(5);
let TextareaForm=(props)=>{
  return(
    <form  className={classes.textarea_container} onSubmit={props.handleSubmit}>
      <p className={classes.offer_to_write}>Write your own gibberish</p>
      <Field  component={'textarea'} name={'newPost'} validate={[requiredField,MaxLength10,MinLength5]}></Field>
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