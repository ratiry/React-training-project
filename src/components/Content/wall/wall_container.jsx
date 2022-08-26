import Textarea_wall from './Textarea_wall/Textarea_wall.jsx';
import Post from './post/Post';
import classes from './wall.module.scss';
import Wall from './wall';
import {addChangeNewPostTextActionCreator,addPostActionCreator } from './../../../redux/Wall-reducer';
import Store_context from '../../../context.js';
let Wall_container = function(props){

  return(
    <Store_context.Consumer>{
      (Store)=>{
        let addPost_0 =()=>{
          Store.dispatch(addPostActionCreator());
        }
        let Textarea_altering=(text)=>{
          Store.dispatch(addChangeNewPostTextActionCreator(text));
        }
        return <Wall   Wall={Store.getState().Wall} 
        addPost_0={addPost_0}
         Textarea_altering={Textarea_altering} />
      }
      }
    </Store_context.Consumer>
  );
}
export default Wall_container;
