import classes from './wall.module.scss';
import React from 'react';
class StatusProfile extends React.Component{
  state={
    editMode:false,
    status:this.props.status
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
  onChangeInput=(e)=>{
    this.setState({
      status:e.currentTarget.value
    });
  }
  render(){
    return(
      <div>
        {this.state.editMode ?<input onChange={this.onChangeInput} autoFocus={true} value={this.state.status} onBlur={this.DeacticateEditMode} type="text" />:
        <span onDoubleClick={this.ActivateEditMode}>{this.props.status}</span> }
      </div>
    )
  }
}
export default StatusProfile;