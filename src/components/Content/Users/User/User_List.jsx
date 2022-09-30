import classes from './../Users.module.scss';
let User_List = (props)=>{
  return(
    <div className={classes.user}>
      <div className={classes.image_container}>
        <img src={props.photoURL} alt="" />
        {props.followed ?
         <button className={classes.button_unfollow} onClick={()=>{props.unfollow(props.id)}}>unfollow</button>: 
         <button className={classes.button_follow} onClick={()=>{props.follow(props.id)}}>follow</button> 
         }
      </div>
      <div className={classes.userInfo}>
        <div className={classes.name}>
          <span>{props.name}</span>
        </div>
        <div className={classes.location}>
          <span>{props.location.country}</span>
          <span>{props.location.city}</span>
        </div>
        <div className={classes.description}><span>{props.description}</span> </div>
      </div>
  </div>
  )
}
export default User_List;