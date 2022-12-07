import Profile_inf_item from './profile_inf_item';
import classes from './wall.module.scss';
import User_anonymos from './../../../images/User_anonymos.jpeg';
let ProfileInfo=(props)=>{
  return(
  <>
   <div>
    {props.Wall.profile.photos.large?<img src={props.Wall.profile.photos.large} alt="" />:
    <img src={User_anonymos}/>}
  <div>
    <span>{props.Wall.profile.aboutMe}</span>
  </div>
  </div>
  <div className={classes.profile_inf_container}>
    <Profile_inf_item name='full Name:' value={props.Wall.profile.fullName}/>
    {props.Wall.profile.lookingForAJob?<Profile_inf_item name='Am I looking for job?' value='YES'/> : <Profile_inf_item name='Am I looking for job?' value='NOPE'/>}
    {props.Wall.profile.lookingForAJobDescription ?<Profile_inf_item name='descroption of job' value={props.Wall.profile.lookingForAJobDescription}/> :null}
    <h5>Contacts</h5>
    {props.elements_contacts}
  </div>
  </>

  )
}
export default ProfileInfo;