
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.scss';
import Friends from './Friends/Friends';
import SideBar from './SideBar';
import { connect } from 'react-redux';
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
let mapDispatchToProps=(dispatch)=>{
  return{

  }
}
let SideBar_container = connect(mapStateToProps,null)(SideBar);
export default SideBar_container;