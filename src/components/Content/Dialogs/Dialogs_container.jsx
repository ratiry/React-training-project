import React from 'react';
import { addMessageActionCreator,changeNewMessageText } from '../../../redux/Dialogs-reducer'; 
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps =(state)=>{
  return{
    Dialogs:state.Dialogs,
    IsAuth:state.auth.IsAuth
  }
}
let mapDispatchToProps =(dispatch)=>{
  return{
    addMessage:()=>{
      let action =addMessageActionCreator() 
      dispatch(action);
    },
    alteringTextarea:(text)=>{
      let action = changeNewMessageText(text) 
      dispatch(action);
    }
  }
}
let Dialogs_container = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default Dialogs_container;