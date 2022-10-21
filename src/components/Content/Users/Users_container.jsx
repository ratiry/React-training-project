import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC,SetCurrentPageAC ,SetTotalCountAC,buttonBackwardAC,buttonForwardAC,SetPagesAC} from './../../../redux/Users-reducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';
class UsersAPI extends React.Component{
  componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}&limit=50`).then(data=> {
        this.props.setUsers(data.data.items);
        this.props.SetTotalCount(data.data.totalCount);
        this.props.SetPages();
      })
  }


  OnPageChange=(p)=>{
    this.props.SetCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.PageSize}`).then(data=> {
      this.props.setUsers(data.data.items);
      this.props.SetPages();
      console.log(this.props.CurrentPage);
    })
  }
  OnButtonPageChange=(type)=>{
    if(type=='B'){
      if(this.props.CurrentPage -1!==0){
        this.props.buttonBackward();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage-1}&count=${this.props.PageSize}&limit=50`).then(data=> {
          this.props.setUsers(data.data.items);
          this.props.SetPages();
          console.log(data.data);
          // this.props.SetTotalCount(data.data.totalCount)
        })
      }   
    }else if(type ==='F'){
      console.log(this.props.CurrentPage+1)
      if(Math.ceil(this.props.TotalUsersCount/this.props.PageSize) < this.props.CurrentPage+1){
    
      }else{
        this.props.buttonForward(); 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage+1}&count=${this.props.PageSize}&limit=50`).then(data=> {
          this.props.setUsers(data.data.items);
          this.props.SetPages();
          console.log(data.data);
          // this.props.SetTotalCount(data.data.totalCount)
        })//multiplies copies without condition  
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
  }
}
let mapDispatchToprops = (dispatch)=>{
  return{
    follow:(id)=>{
      let action = followAC(id);
      dispatch(action);
    },
    unfollow:(id)=>{
      let action = unfollowAC(id);
      dispatch(action);
    },
    setUsers:(users)=>{
      let action = setUsersAC(users);
      dispatch(action)
    },
    SetCurrentPage:(currentPage)=>{
      let  action = SetCurrentPageAC(currentPage);
      dispatch(action);
    },
    SetTotalCount:(TotalCount)=>{
      let  action = SetTotalCountAC(TotalCount);
      dispatch(action);
    },
    buttonForward:()=>{
      let action = buttonForwardAC();
      dispatch(action)
    },
    buttonBackward:()=>{
      let action = buttonBackwardAC();
      dispatch(action);
    },
    SetPages:()=>{
      let action = SetPagesAC();
      dispatch(action);
    }
  }
}
export  let Users_container = connect(mapStateToProps,mapDispatchToprops)(UsersAPI);