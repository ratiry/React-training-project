import { connect } from 'react-redux';
import { follow, unfollow, setUsers, SetCurrentPage, SetTotalCount, buttonBackward, buttonForward, SetPages, IsFetching_action } from './../../../redux/Users-reducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';
class UsersAPI extends React.Component{
  componentDidMount(){
    this.props.IsFetching_action(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}&limit=50`,{withCredentials:true}).then(data=> {
        this.props.IsFetching_action(false);
        this.props.setUsers(data.data.items);
        this.props.SetTotalCount(data.data.totalCount);
        this.props.SetPages();
      })
  }


  OnPageChange=(p)=>{
    this.props.SetCurrentPage(p);
    this.props.IsFetching_action(true);
    this.props.SetPages();
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.PageSize}`,{withCredentials:true}).then(data=> {
      this.props.setUsers(data.data.items);
      this.props.IsFetching_action(false);
    })
  }
  OnButtonPageChange=(type)=>{
    if(type=='B'){
      if(this.props.CurrentPage -1!==0){
        this.props.buttonBackward();
        this.props.IsFetching_action(true);
        this.props.SetPages();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage-1}&count=${this.props.PageSize}&limit=50`,{withCredentials:true}).then(data=> {
          this.props.setUsers(data.data.items);
          this.props.IsFetching_action(false);
          // this.props.SetTotalCount(data.data.totalCount)
        })
      }   
    }else if(type ==='F'){
      if(Math.ceil(this.props.TotalUsersCount/this.props.PageSize) < this.props.CurrentPage+1){
    
      }else{
        this.props.buttonForward(); 
        this.props.IsFetching_action(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage+1}&count=${this.props.PageSize}&limit=50`,{withCredentials:true}).then(data=> {
          this.props.setUsers(data.data.items);
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
    IsFetching:state.Users.IsFetching
  }
}
let mapDispatchToProps={
  follow,unfollow,setUsers,SetCurrentPage,SetTotalCount,
  buttonForward,buttonBackward,SetPages,IsFetching_action,
}
export  let Users_container = connect(mapStateToProps,mapDispatchToProps)(UsersAPI);