import React from 'react';
import { addMessageActionCreator,changeNewMessageText } from '../../../redux/Dialogs-reducer'; 
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithRedicrectComponent } from './../../../HOC/AuthwithRedirect';
import { compose } from 'redux';


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
let composed_Dialogs = compose(
  WithRedicrectComponent,
  connect(mapStateToProps,mapDispatchToProps)
)(Dialogs);
export default composed_Dialogs;