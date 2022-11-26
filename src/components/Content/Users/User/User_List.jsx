import classes from './../Users.module.scss';
import user_anonymos from '../../../../images/User_anonymos.jpeg';
import { NavLink } from 'react-router-dom';
import { USERS_API } from './../../../../API/API';
let User_List = (props)=>{
  let photoURL =  user_anonymos;
  if(props.photoURL !=null){
    photoURL = props.photoURL;
  }
  return(
    <div className={classes.user}>
      <div className={classes.image_container}>
        <NavLink to={'/Wall/' + props.id}>
          <img src={photoURL} alt="" />
        </NavLink>
        {props.followed ?
         <button disabled={props.IsfollowingInProgress.some((id)=>id==props.id)} className={classes.button_unfollow} 
         onClick={()=>{props.UnfollowThunkCreator(props.id)}}>unfollow</button>: 
         <button disabled={props.IsfollowingInProgress.some((id)=>id==props.id)} className={classes.button_follow} 
         onClick={()=>{props.followThunkCreator(props.id)}}>follow</button> 
         }
      </div>
      <div className={classes.userInfo}>
        <div className={classes.name}>
          <span>{props.name}</span>
        </div>
        <div className={classes.location}>
          <span>props.location.country</span>
          <span>props.location.city</span>
        </div>
        <div className={classes.description}><span>{props.description}</span> </div>
      </div>
  </div>
  )
}
export default User_List;