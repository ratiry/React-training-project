import React from 'react';
import { addMessageActionCreator,changeNewMessageText } from '../../../redux/Dialogs-reducer'; 
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithRedicrectComponent } from './../../../HOC/AuthwithRedirect';


let mapStateToProps =(state)=>{
  return{
    Dialogs:state.Dialogs,
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
let Dialogs_with_auth_redirect=WithRedicrectComponent(Dialogs);
let Dialogs_container = connect(mapStateToProps,mapDispatchToProps)(Dialogs_with_auth_redirect);
export default Dialogs_container;