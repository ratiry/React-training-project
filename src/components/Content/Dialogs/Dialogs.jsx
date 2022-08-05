import classes from './Dialogs.module.scss';
import React from 'react';
import User from './User/User';
import Message from './Message/Message';
const Dialogs =(props)=>{
  let Messages_elements = props.Dialogs.dataMessages.map( (message) => <Message message={message.message} whose={message.whose} Name ={message.Name} />)
  let Dialogs_elements = props.Dialogs.dataUsers.map( (name) => <User name={name.name} id={name.id} />)
  let textarea = React.useRef();
  let addMessage =()=>{
    props.addMessage();
  }
  let altering_textarea=()=>{
    
    props.changeNewMessageText(textarea.current.value);
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
        <div className={classes.textarea_container}>
          <textarea value={props.new_text_Dialogs} onChange={altering_textarea} ref={textarea}> </textarea>
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;