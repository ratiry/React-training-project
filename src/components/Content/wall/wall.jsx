import Textarea_wall from './Textarea_wall/Textarea_wall.jsx';
import Post from './post/Post';
import classes from './wall.module.scss';
import Preloader from '../../Preloader/Preloader.jsx';
import User_anonymos from './../../../images/User_anonymos.jpeg';
import Profile_inf_item from './profile_inf_item';
import { Navigate } from 'react-router-dom';
let Wall = function(props){
  let Posts_Elements = props.Wall.DataPosts.map((p) => <Post message={p.message} name={p.name} Likes={p.Likes}/>)
  let contacts=[];
  let elements_contacts = [];
  if(!props.Wall.profile){
    return <Preloader/>
  }else{
    let count_of_underfined_contacts = 0;
     for(let i=0;i<Object.keys(props.Wall.profile.contacts).length;i++){
      let array=[];
      let contact = Object.keys(props.Wall.profile.contacts)[i];
      let link_of_contact = Object.values(props.Wall.profile.contacts)[i];
      if(link_of_contact){
        array.push(contact);
        array.push(link_of_contact);
        contacts.push(array);
      }else{
        count_of_underfined_contacts++;
      }
     }
     if(count_of_underfined_contacts !==Object.keys(props.Wall.profile.contacts).length){
      elements_contacts = contacts.map(c=>{ return <Profile_inf_item name={c[0]} value={c[1]}/>})
     }else{
        elements_contacts.push(props.Wall.allContactsAreUnderfined);
     }
    return(
      <div className={classes.Wall}>
        <h4>Wall</h4>
        <img src={props.Wall.Wall_image} className={classes.Wall_image} alt="" />
        <div>
          {props.Wall.profile.photos.large?<img src={props.Wall.profile.photos.large} alt="" />:<img src={User_anonymos}/>}
        <div>
          <span>{props.Wall.profile.aboutMe}</span>
        </div>
        </div>
        <div className={classes.profile_inf_container}>
          <Profile_inf_item name='full Name:' value={props.Wall.profile.fullName}/>
          {props.Wall.profile.lookingForAJob?<Profile_inf_item name='Am I looking for job?' value='YES'/> : <Profile_inf_item name='Am I looking for job?' value='NOPE'/>}
          {props.Wall.profile.lookingForAJobDescription ?<Profile_inf_item name='descroption of job' value={props.Wall.profile.lookingForAJobDescription}/> :null}
          <h5>Contacts</h5>
          {elements_contacts}
        </div>
        <Textarea_wall 
        addPost_0={props.addPost_0}
        Textarea_altering={props.Textarea_altering}
         new_text={props.Wall.new_text}/>
        <div className="posts">
           {Posts_Elements}
        </div>
      </div>
    );
  }
}
export default Wall;
