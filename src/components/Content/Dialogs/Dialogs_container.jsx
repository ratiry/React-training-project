import classes from './Dialogs.module.scss';
import React from 'react';
import User from './User/User';
import Message from './Message/Message';
import { addMessageActionCreator,changeNewMessageText } from '../../../redux/Dialogs-reducer'; 
import Dialogs from './Dialogs';
const Dialogs_container =(props)=>{
  let Messages_elements = props.Dialogs.dataMessages.map( (message) => <Message message={message.message} whose={message.whose} Name ={message.Name} />)
  let Dialogs_elements = props.Dialogs.dataUsers.map( (name) => <User name={name.name} id={name.id} />)
  let textarea = React.useRef();
  let addMessage =()=>{
    props.dispatch(addMessageActionCreator());
  }
  let altering_textarea=(text)=>{
    props.dispatch(changeNewMessageText(text));
  }
  return(
    <Dialogs addMessage={addMessage} altering_textarea={altering_textarea} Dialogs={props.Dialogs} />
  );
}
export default Dialogs_container;