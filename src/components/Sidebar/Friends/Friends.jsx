import classes from './Friends.module.scss';
import Friend from './Friend/Friend.jsx';
let Friends =(props)=>{
  let Friends_Elements = props.Friends.map((p) => <Friend name={p.name} id={p.id} Delete_Friend={props.Delete_Friend}/>)
  let Switch = true;
  if(props.Friends.length==0){
    Switch = false;
  }
  return(
    <div className={classes.Friends}>
      <h4>Friends</h4>
      {Switch?Friends_Elements:<h4>You don't have any friends</h4>}
    </div>
  );
}
export default Friends;