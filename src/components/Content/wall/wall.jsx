import Textarea_wall from './Textarea_wall/Textarea_wall.jsx';
import Post from './post/Post';
import classes from './wall.module.scss';
let Wall = function(props){
  // let DataPosts= [
  //   {name:'Slava',message:'dgddg', Likes:15},
  //   {name:'Horward',message:'fgfgf',Likes :10},
  //   {name:'Quizee',message:'ggggg',Likes:0},
  // ]
  let Posts_Elements = props.DataPosts.map((p) => <Post message={p.message} name={p.name} Likes={p.Like}/>)
  return(
    <div className={classes.Wall}>
      <h4>Wall</h4>
      <Textarea_wall/>
      <div className="posts">
         {Posts_Elements}
      </div>
    </div>
  );
}
export default Wall;
