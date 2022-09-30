import classes from './Friends.module.scss';
import Friend from './Friend/Friend.jsx';
let Friends =(props)=>{
  let Friends_Elements = props.Friends.map((p) => <Friend name={p.name} />)
  return(
    <div className={classes.Friends}>
      <h4>Friends</h4>
       {Friends_Elements}
    </div>
  );
}
export default Friends;