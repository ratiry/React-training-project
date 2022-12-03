// import Textarea_wall from './Textarea_wall/Textarea_wall.jsx';
// import Post from './post/Post';
// import classes from './wall.module.scss';
import Wall from './wall';
import {addChangeNewPostTextActionCreator,addPostActionCreator } from './../../../redux/Wall-reducer';
import { connect } from 'react-redux';
import React from 'react';
import { SetUserProfile } from './../../../redux/Wall-reducer';
import {
  useLocation,
  useNavigate,
  useParams,
  Navigate
} from "react-router-dom";
import { GetProfileThunk } from './../../../redux/Wall-reducer';
import { WithRedicrectComponent } from '../../../HOC/AuthwithRedirect';
import { compose } from 'redux';
import { withRouter } from './../../../HOC/WithRouterProps';

class Wall_API extends React.Component{
  componentDidMount(){
    let userId = this.props.router.params.userId;
    if(!userId){
      userId=1045;
    }
    this.props.GetProfileThunk(userId);
  }
  render(){
    
    return(
      <Wall Wall={this.props.Wall} addPost_0={this.props.addPost_0} Textarea_altering={this.props.Textarea_altering} IsAuth={this.props.IsAuth} id={this.props.router.params.userId}/>
    )
  }
}
let mapStateToProps = (state)=>{
  return{
    Wall:state.Wall,
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{
    addPost_0:()=>{
      let action = addPostActionCreator(); 
      dispatch(action);
    },
    Textarea_altering:(text)=>{
      let action = addChangeNewPostTextActionCreator(text) 
      dispatch(action);
    },
    SetUserProfile:(data)=>{
      dispatch(SetUserProfile(data));
    },
    GetProfileThunk:(id)=>{
      dispatch(GetProfileThunk(id));
    }
  }
}
let composed_Wall = compose(
  WithRedicrectComponent,
  withRouter,
  connect(mapStateToProps,mapDispatchToProps),
)(Wall_API)
export default composed_Wall;
