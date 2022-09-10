// import Textarea_wall from './Textarea_wall/Textarea_wall.jsx';
// import Post from './post/Post';
// import classes from './wall.module.scss';
import Wall from './wall';
import {addChangeNewPostTextActionCreator,addPostActionCreator } from './../../../redux/Wall-reducer';
import { connect } from 'react-redux';
// let Wall_container = function(props){

//   return(
//     <Store_context.Consumer>{
//       (Store)=>{
//         let addPost_0 =()=>{
//           Store.dispatch(addPostActionCreator());
//         }
//         let Textarea_altering=(text)=>{
//           Store.dispatch(addChangeNewPostTextActionCreator(text));
//         }
//         return <Wall   Wall={Store.getState().Wall} 
//         addPost_0={addPost_0}
//          Textarea_altering={Textarea_altering} />
//       }
//       }
//     </Store_context.Consumer>
//   );
// }
let mapStateToProps = (state)=>{
  
  return{
    Wall:state.Wall
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{
    addPost_0:()=>{
      let action = addPostActionCreator(); 
      dispatch(action);
    },
    Textarea_altering:(text)=>{
      let action = addChangeNewPostTextActionCreator(text) 
      dispatch(action);
    }
  }
}
let Wall_container = connect(mapStateToProps,mapDispatchToProps)(Wall);
export default Wall_container;
