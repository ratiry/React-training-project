import Wall from './wall';
import {addPostActionCreator } from './../../../redux/Wall-reducer';
import { connect } from 'react-redux';
import React from 'react';
import { SetUserProfile } from './../../../redux/Wall-reducer';
import { GetProfileThunk } from './../../../redux/Wall-reducer';
import { WithRedicrectComponent } from '../../../HOC/AuthwithRedirect';
import { compose } from 'redux';
import { GetStatusThunk } from './../../../redux/Wall-reducer';
import { withRouter } from './../../../HOC/WithRouterProps';
import { UpdateStatusThunk } from './../../../redux/Wall-reducer';
import { GetAuthThunk } from './../../../redux/auth_reducer';

class Wall_API extends React.Component{
  componentDidMount(){
    let userId = this.props.router.params.userId;
    if(!userId){
      userId=this.props.userId;
      debugger;
    }
    this.props.GetProfileThunk(userId);
    this.props.GetStatusThunk(userId);
  }
  render(){
    return(
      <Wall UpdateStatusThunk={this.props.UpdateStatusThunk}  Wall={this.props.Wall} addPost_0={this.props.addPost_0} Textarea_altering={this.props.Textarea_altering} IsAuth={this.props.IsAuth} id={this.props.router.params.userId}/>
    )
  }
}
let mapStateToProps = (state)=>{
  return{
    Wall:state.Wall,
    IsAuth:state.auth.IsAuth,
    userId:state.auth.userId
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{
    addPost_0:(value)=>{
      let action = addPostActionCreator(value); 
      dispatch(action);
    },
    SetUserProfile:(data)=>{
      dispatch(SetUserProfile(data));
    },
    GetProfileThunk:(id)=>{
      dispatch(GetProfileThunk(id));
    },
    GetStatusThunk:(id)=>{
      dispatch(GetStatusThunk(id));
    },
    UpdateStatusThunk:(status)=>{
      dispatch(UpdateStatusThunk(status));
    },
    GetAuthThunk:()=>{
      dispatch(GetAuthThunk());
    }
  }
}
let composed_Wall = compose(
  // WithRedicrectComponent,
  withRouter,
  connect(mapStateToProps,mapDispatchToProps),
)(Wall_API)
export default composed_Wall;
