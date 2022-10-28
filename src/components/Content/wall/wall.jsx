import Textarea_wall from './Textarea_wall/Textarea_wall.jsx';
import Post from './post/Post';
import classes from './wall.module.scss';
import Preloader from '../../Preloader/Preloader.jsx';
import User_anonymos from './../../../images/User_anonymos.jpeg';
let Wall = function(props){
  let Posts_Elements = props.Wall.DataPosts.map((p) => <Post message={p.message} name={p.name} Likes={p.Likes}/>)
  if(!props.Wall.profile){
    return <Preloader/>
  }else{
    console.log(props);
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
