import classes from './Friends.module.scss';
import Friend from './Friend/Friend.jsx';
let Friends =()=>{
  return(
    <div className={classes.Friends}>
      <h4>Friends</h4>
       <Friend  Name='Peter'/>
       <Friend Name='Jef'/>
       <Friend Name='Rudolf'/>

    </div>
  );
}
export default Friends;