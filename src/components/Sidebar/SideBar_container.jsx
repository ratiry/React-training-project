
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.scss';
import Friends from './Friends/Friends';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { Delete_Friend } from '../../redux/SideBar_reducer';
import { compose } from 'redux';

let mapStateToProps=(state)=>{
  
  return{
    SideBar:state.SideBar
  }
}
let mapDispatchToProps={
  Delete_Friend
}
let composed_SideBar= compose(
  
  connect(mapStateToProps,mapDispatchToProps)
)(SideBar);
export default composed_SideBar;