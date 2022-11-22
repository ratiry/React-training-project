
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.scss';
import Friends from './Friends/Friends';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { Delete_Friend } from '../../redux/SideBar_reducer';
const isActive=({isActive}) => ({color: isActive ? 'gold' : 'white'});
// const SideBar_container = function(){
//   return(
//     <Store_context.Consumer>{
//         (Store)=>{
//           return(
//             <SideBar SideBar={Store.getState().SideBar}/>
//           )
//         }
//       }
//  </Store_context.Consumer>
//   );
// }
let mapStateToProps=(state)=>{
  
  return{
    SideBar:state.SideBar
  }
}
let mapDispatchToProps={
  Delete_Friend
}
let SideBar_container = connect(mapStateToProps,mapDispatchToProps)(SideBar);
export default SideBar_container;