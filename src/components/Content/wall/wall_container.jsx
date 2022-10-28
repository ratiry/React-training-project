// import Textarea_wall from './Textarea_wall/Textarea_wall.jsx';
// import Post from './post/Post';
// import classes from './wall.module.scss';
import Wall from './wall';
import {addChangeNewPostTextActionCreator,addPostActionCreator } from './../../../redux/Wall-reducer';
import { connect } from 'react-redux';
import React from 'react';
import  axios  from 'axios';
import { SetUserProfile } from './../../../redux/Wall-reducer';

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
    }
  }
}
class Wall_API extends React.Component{
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/8`).then(response=> {
      console.log(response.data);
      debugger;
      this.props.SetUserProfile(response.data);
    })
  }
  render(){
    return(
      <Wall Wall={this.props.Wall} addPost_0={this.props.addPost_0} Textarea_altering={this.props.Textarea_altering}/>
    )
  }
}
let Wall_container = connect(mapStateToProps,mapDispatchToProps)(Wall_API);
export default Wall_container;
