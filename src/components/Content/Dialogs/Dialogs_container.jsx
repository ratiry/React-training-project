import React from 'react';
import { addMessageActionCreator } from '../../../redux/Dialogs-reducer'; 
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
    addMessage:(value)=>{
      let action =addMessageActionCreator(value) 
      dispatch(action);
    },
  }
}
let composed_Dialogs = compose(
  WithRedicrectComponent,
  connect(mapStateToProps,mapDispatchToProps)
)(Dialogs);
export default composed_Dialogs;