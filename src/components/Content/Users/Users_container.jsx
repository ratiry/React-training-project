import { connect } from 'react-redux';
import Users from './Users';

import { followAC, unfollowAC, setUsersAC,SetCurrentPageAC ,SetTotalCountAC} from './../../../redux/Users-reducer';
let mapStateToProps=(state)=>{
  return{
    Users:state.Users,
    PageSize:state.Users.PageSize,
    TotalUsersCount:state.Users.TotalUsersCount,
    CurrentPage:state.Users.CurrentPage
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
    
  }
}
export  let Users_container = connect(mapStateToProps,mapDispatchToprops)(Users);