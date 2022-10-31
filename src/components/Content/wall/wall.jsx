import Textarea_wall from './Textarea_wall/Textarea_wall.jsx';
import Post from './post/Post';
import classes from './wall.module.scss';
import Preloader from '../../Preloader/Preloader.jsx';
import User_anonymos from './../../../images/User_anonymos.jpeg';
import Profile_inf_item from './profile_inf_item';
let Wall = function(props){
  let Posts_Elements = props.Wall.DataPosts.map((p) => <Post message={p.message} name={p.name} Likes={p.Likes}/>)
  let contacts=[];
  let elements_contacts = [];
  if(!props.Wall.profile){
    return <Preloader/>
  }else{
     for(let i=0;i<Object.keys(props.Wall.profile.contacts).length;i++){
      let array=[];
      let contact = Object.keys(props.Wall.profile.contacts)[i];
      let link_of_contact = Object.values(props.Wall.profile.contacts)[i];
      if(link_of_contact){
        array.push(contact);
        array.push(link_of_contact);
        contacts.push(array);
      }
     }
     console.log(contacts);
     elements_contacts = contacts.map(c=>{ return <Profile_inf_item name={c[0]} value={c[1]}/>})
     debugger;
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
          <div className={classes.profile_inf}>
            <span>full Name:</span>
            <span>{props.Wall.profile.fullName}</span>
          </div>
          <div className={classes.profile_inf}>
            <span>Am I looking for job?</span>
            {props.Wall.profile.lookingForAJob?<span>YES</span>:<span>NOPE</span>}
          </div>
          {props.Wall.profile.lookingForAJobDescription ? <div className={classes.profile_inf}> <span>description of job:</span><span>{props.Wall.profile.lookingForAJobDescription}</span></div>:null}
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
