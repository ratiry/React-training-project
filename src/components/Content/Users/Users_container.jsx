import { connect } from 'react-redux';
import { follow, unfollow,  buttonBackward, buttonForward,  followingInProgress, GetUsersThunkCreator,followThunkCreator,UnfollowThunkCreator } from './../../../redux/Users-reducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';
import { USERS_API } from '../../../API/API';
class UsersAPI extends React.Component{
  componentDidMount(){
    this.props.GetUsersThunkCreator(this.props.CurrentPage,this.props.PageSize);
  }
  OnPageChange=(p)=>{
    this.props.GetUsersThunkCreator(p,this.props.PageSize);
  }
  OnButtonPageChange=(type)=>{
    if(type==='B'){
      if(this.props.CurrentPage -1!==0){
        this.props.buttonBackward();
        this.props.GetUsersThunkCreator(this.props.CurrentPage-1,this.props.PageSize);
      }   
    }else if(type ==='F'){
      if(Math.ceil(this.props.TotalUsersCount/this.props.PageSize) < this.props.CurrentPage+1){
    
      }else{
        this.props.buttonForward(); 
        this.props.GetUsersThunkCreator(this.props.CurrentPage+1,this.props.PageSize);
      }
    }
  }
  render(){
      return <Users TotalUsersCount={this.props.TotalUsersCount}
    PageSize={this.props.PageSize}
    BeforeCurrentPageArray={this.props.BeforeCurrentPageArray}
    OnPageChange={this.OnPageChange}
    AfterCurrentPageArray={this.props.AfterCurrentPageArray}
    OnButtonPageChange={this.OnButtonPageChange}
    CurrentPage={this.props.CurrentPage}
    Users_array={this.props.Users.Users_array}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    IsFetching={this.props.IsFetching}
    IsfollowingInProgress={this.props.IsfollowingInProgress}
    followingInProgress={this.props.followingInProgress}
    followThunkCreator={this.props.followThunkCreator}
    UnfollowThunkCreator={this.props.UnfollowThunkCreator}
    />;
  }
}
let mapStateToProps=(state)=>{
  return{
    Users:state.Users,
    PageSize:state.Users.PageSize,
    TotalUsersCount:state.Users.TotalUsersCount,
    CurrentPage:state.Users.CurrentPage,
    BeforeCurrentPageArray:state.Users.BeforeCurrentPageArray,
    AfterCurrentPageArray:state.Users.AfterCurrentPageArray,
    LengthPageArray:state.Users.LengthPageArray,
    IsFetching:state.Users.IsFetching,
    IsfollowingInProgress:state.Users.IsfollowingInProgress
  }
}
let mapDispatchToProps={
  follow,unfollow,
  buttonForward,buttonBackward,
  followingInProgress,GetUsersThunkCreator,UnfollowThunkCreator,followThunkCreator
}
export  let Users_container = connect(mapStateToProps,mapDispatchToProps)(UsersAPI);