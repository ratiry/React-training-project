import classes from './wall.module.scss';
let Profile_inf =(props)=>{
  return(
    <div className={classes.profile_inf}>
      <span>{props.name}</span>
      <span>{props.value}</span>
  </div>
  )
}
export default Profile_inf;