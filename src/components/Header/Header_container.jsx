import logo from './../../logo.svg';
import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import axios from 'axios';
import {set_data_user,IsFetching_action} from './../../redux/auth_reducer.js';
import { connect } from 'react-redux';
class HeaderComponent extends React.Component {
  componentDidMount(){
    this.props.IsFetching_action(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true}).then(response=> {
      if(response.data.resultCode ==0){
        console.log(response.data.data.email);
        this.props.IsFetching_action(false);
        this.props.set_data_user(response.data.data.email,response.data.data.login,response.data.data.id)
      }else{
        this.props.set_data_user('none','none','none');
      }
    })
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
  set_data_user,IsFetching_action
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);