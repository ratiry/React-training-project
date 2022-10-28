import classes from './../Users.module.scss';
import user_anonymos from '../../../../images/User_anonymos.jpeg';
import { render } from '@testing-library/react';
import { NavLink } from 'react-router-dom';
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
         <button className={classes.button_unfollow} onClick={()=>{props.unfollow(props.id)}}>unfollow</button>: 
         <button className={classes.button_follow} onClick={()=>{props.follow(props.id)}}>follow</button> 
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