
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.scss';
import Friends from './Friends/Friends';
import SideBar from './SideBar';
import Store_context from './../../context';
const isActive=({isActive}) => ({color: isActive ? 'gold' : 'white'});
const SideBar_container = function(){
  return(
    <Store_context.Consumer>{
        (Store)=>{
          return(
            <SideBar SideBar={Store.getState().SideBar}/>
          )
        }
      }
 </Store_context.Consumer>
  );
}
export default SideBar_container;