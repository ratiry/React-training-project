import classes from './../Users.module.scss';
import user_anonymos from '../../../../images/User_anonymos.jpeg';
import { render } from '@testing-library/react';
import axios from 'axios';
import { delete_follow } from '../../../../API/API';
import { NavLink } from 'react-router-dom';
import { post_follow, USERS_API } from './../../../../API/API';
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
         <button disabled={props.IsfollowingInProgress} className={classes.button_unfollow} onClick={()=>{
          props.followingInProgress(true);
          USERS_API.delete_follow(props.id).then(response=> {
            if(response.data.resultCode ===0){
              props.unfollow(props.id)
            }
            props.followingInProgress(false);
          })}}>unfollow</button>: 
         <button disabled={props.IsfollowingInProgress} className={classes.button_follow} onClick={()=>{
          props.followingInProgress(true);
          USERS_API.post_follow(props.id).then(response=> {
            props.followingInProgress(false);
            if(response.data.resultCode ===0){
              props.follow(props.id)
            }
          })
        }}>follow</button> 
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