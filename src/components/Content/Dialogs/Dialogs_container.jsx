import React from 'react';
import { addMessageActionCreator,changeNewMessageText } from '../../../redux/Dialogs-reducer'; 
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const Dialogs_container =(props)=>{

//   return(
//     <Store_context.Consumer>
//       {
//         (Store)=>{

//           let addMessage =()=>{
//             Store.dispatch(addMessageActionCreator());
//           }
//           let altering_textarea=(text)=>{
//             Store.dispatch(changeNewMessageText(text));
//           }
//           return <Dialogs addMessage={addMessage} altering_textarea={altering_textarea} Dialogs={Store.getState().Dialogs} /> 
//         }
//       }
//    </Store_context.Consumer>
//   );
// }
let mapStateToProps =(state)=>{
  return{
    Dialogs:state.Dialogs
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