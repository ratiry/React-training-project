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
    this.props.UpdateStatusThunk(this.state.status); 
  }
  onChangeInput=(e)=>{
    this.setState({
      status:e.currentTarget.value
    });
  }
  componentDidUpdate(PP,PS){
    if(PP.status != this.props.status){
      this.setState({
        status:this.props.status
      })
    }
  }
  render(){
    return(
      <div>
        {/* {!this.state.status ? <span onDoubleClick={this.ActivateEditMode}>You have no status  doubleclick to change It!</span> : <></>} */}
        {this.state.editMode  ?<input onChange={this.onChangeInput} autoFocus={true} value={this.state.status} onBlur={this.DeacticateEditMode} type="text" />:
        <span onDoubleClick={this.ActivateEditMode}>{this.props.status ? this.props.status:'----'}</span> }
      </div>
    )
  }
}
export default StatusProfile;