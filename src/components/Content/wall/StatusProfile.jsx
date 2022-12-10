import classes from './wall.module.scss';
import React from 'react';
class StatusProfile extends React.Component{
  state={
    editMode:false
  }
  ActivateEditMode=()=>{
    this.setState({
      editMode:true
    });
  }
  DeacticateEditMode=()=>{
    this.setState({
      editMode:false
    });
  }
  render(){
    return(
      <div>
        {this.state.editMode ?<input autoFocus={true} value={this.props.aboutMe} onBlur={this.DeacticateEditMode} type="text" />:
        <span onDoubleClick={this.ActivateEditMode}>{this.props.aboutMe}</span> }
      </div>
    )
  }
}
export default StatusProfile;