import Textarea_wall from './Textarea_wall/Textarea_wall.jsx';
import Post from './post/Post';
import classes from './wall.module.scss';
let Wall = function(props){
  let Posts_Elements = props.Wall.DataPosts.map((p) => <Post message={p.message} name={p.name} Likes={p.Likes}/>)
  return(
    <div className={classes.Wall}>
      <h4>Wall</h4>
      <Textarea_wall addPost ={props.addPost} new_text={props.new_text} changeNewPostText={props.changeNewPostText}/>
      <div className="posts">
         {Posts_Elements}
      </div>
    </div>
  );
}
export default Wall;
