import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from './../../../redux/Users-reducer';
let mapStateToProps=(state)=>{
  return{
    Users:state.Users
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
    }
  }
}
export  let Users_container = connect(mapStateToProps,mapDispatchToprops)(Users);