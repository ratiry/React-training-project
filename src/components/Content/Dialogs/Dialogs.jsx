import classes from './Dialogs.module.scss';
import React from 'react';
import User from './User/User';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import { Field } from 'redux-form';
import {reduxForm} from 'redux-form';
import Textarea from '../../Common/Textarea/Textarea';
import { maxLengthCreator, minLengthCreator, requiredField } from '../../../Utils/validations/validators';
let maxLength100=maxLengthCreator(100);
let minLength5= minLengthCreator(5);
let DialogsForm=(props)=>{
  return(
  <form className={classes.textarea_container} onSubmit={props.handleSubmit}>
    <Field component={Textarea} name={'DialogsTextarea'} validate={[requiredField,maxLength100,minLength5]} /> 
    <button >send</button>
  </form>
  )
}
DialogsForm=reduxForm({form:'DialogsForm'})(DialogsForm);
const Dialogs =(props)=>{
  let Messages_elements = props.Dialogs.dataMessages.map( (message) => <Message message={message.message} whose={message.whose} Name ={message.Name} />)
  let Dialogs_elements = props.Dialogs.dataUsers.map( (name) => <User name={name.name} id={name.id} />)
  let addMessage =(value)=>{
    props.addMessage(value.DialogsTextarea);

  }
  return(
    <div className={classes.Dialogs}>
      <h4>Dialogs</h4>
      <div className={classes.Dialogs_inner}>
        <div className={classes.Dialogs_items}>   
            {  Dialogs_elements}
        </div>
        <div className={classes.messages}>
          { Messages_elements }
        </div>
      </div>
      <DialogsForm onSubmit={addMessage}/>
    </div>
  );
}

export default Dialogs;