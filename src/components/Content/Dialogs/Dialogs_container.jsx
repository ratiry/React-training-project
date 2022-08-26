import React from 'react';
import Store_context from '../../../context';
import { addMessageActionCreator,changeNewMessageText } from '../../../redux/Dialogs-reducer'; 
import Dialogs from './Dialogs';

const Dialogs_container =(props)=>{

  return(
    <Store_context.Consumer>
      {
        (Store)=>{

          debugger;
          let addMessage =()=>{
            Store.dispatch(addMessageActionCreator());
          }
          let altering_textarea=(text)=>{
            Store.dispatch(changeNewMessageText(text));
          }
          return <Dialogs addMessage={addMessage} altering_textarea={altering_textarea} Dialogs={Store.getState().Dialogs} /> 
        }
      }
   </Store_context.Consumer>
  );
}
export default Dialogs_container;