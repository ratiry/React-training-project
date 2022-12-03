import logo from './../../logo.svg';
import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import { GetAuthThunk } from './../../redux/auth_reducer.js';
import {set_data_user,IsFetching_action} from './../../redux/auth_reducer.js';
import { connect } from 'react-redux';
import { compose } from 'redux';
class HeaderComponent extends React.Component {
  componentDidMount(){
    this.props.GetAuthThunk();
  }
  render(){
    return(
      <Header {...this.props}/>
    );
  }
}
let mapStateToProps=(State)=>{
  return{
    auth:State.auth
  }
}
let mapDispatchToProps={
  set_data_user,IsFetching_action,GetAuthThunk
}
let composed_Header=compose(
  connect(mapStateToProps,mapDispatchToProps)
)(HeaderComponent);
export default composed_Header;