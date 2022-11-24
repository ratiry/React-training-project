import { connect } from 'react-redux';
import { follow, unfollow, setUsers, SetCurrentPage, SetTotalCount, buttonBackward, buttonForward, SetPages, IsFetching_action, followingInProgress } from './../../../redux/Users-reducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';
import { USERS_API } from '../../../API/API';
class UsersAPI extends React.Component{
  componentDidMount(){
    this.props.IsFetching_action(true);
    USERS_API.GetUsers(this.props.CurrentPage,this.props.PageSize).then(data=> {
        this.props.IsFetching_action(false);
        this.props.setUsers(data.items);
        this.props.SetTotalCount(data.totalCount);
        this.props.SetPages();
      })
  }


  OnPageChange=(p)=>{
    this.props.SetCurrentPage(p);
    this.props.IsFetching_action(true);
    this.props.SetPages();
    USERS_API.GetUsers(this.props.CurrentPage,this.props.PageSize).then(data=> {
      this.props.setUsers(data.items);
      this.props.IsFetching_action(false);
    })
  }
  OnButtonPageChange=(type)=>{
    if(type=='B'){
      if(this.props.CurrentPage -1!==0){
        this.props.buttonBackward();
        this.props.IsFetching_action(true);
        this.props.SetPages();
        USERS_API.GetUsers(this.props.CurrentPage-1,this.props.PageSize).then(data=> {
          this.props.setUsers(data.items);
          this.props.IsFetching_action(false);
          // this.props.SetTotalCount(data.data.totalCount)
        })
      }   
    }else if(type ==='F'){
      if(Math.ceil(this.props.TotalUsersCount/this.props.PageSize) < this.props.CurrentPage+1){
    
      }else{
        this.props.buttonForward(); 
        this.props.IsFetching_action(true);
        USERS_API.GetUsers(this.props.CurrentPage+1,this.props.PageSize).then(data=> {
          this.props.setUsers(data.items);
          this.props.IsFetching_action(false);
          this.props.SetPages();
        }) 
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
  follow,unfollow,setUsers,SetCurrentPage,SetTotalCount,
  buttonForward,buttonBackward,SetPages,IsFetching_action,followingInProgress
}
export  let Users_container = connect(mapStateToProps,mapDispatchToProps)(UsersAPI);