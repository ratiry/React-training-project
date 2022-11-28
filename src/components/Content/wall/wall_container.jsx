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
  useParams
} from "react-router-dom";
import { GetProfileThunk } from './../../../redux/Wall-reducer';
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
let mapStateToProps = (state)=>{
  return{
    Wall:state.Wall
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
class Wall_API extends React.Component{
  componentDidMount(){
    let userId = this.props.router.params.userId;
    if(!userId){
      userId=2;
    }
    this.props.GetProfileThunk(userId);
  }
  render(){
    return(
      <Wall Wall={this.props.Wall} addPost_0={this.props.addPost_0} Textarea_altering={this.props.Textarea_altering}/>
    )
  }
}
let Wall_with_Url_data = withRouter(Wall_API);
let Wall_container = connect(mapStateToProps,mapDispatchToProps)(Wall_with_Url_data);
export default Wall_container;
