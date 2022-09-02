import classes from './Friends.module.scss';
import Friend from './Friend/Friend.jsx';
let Friends =(props)=>{
  console.log(props.Friends) // fffhh
  let Friends_Elements = props.Friends.map((p) => <Friend name={p.name} />)
  console.log(Friends_Elements); 
  return(
    <div className={classes.Friends}>
      <h4>Friends</h4>
       {/* <Friend  Name='Peter'/>
       <Friend Name='Jef'/>
       <Friend Name='Rudolf'/> */}
       {Friends_Elements}
    </div>
  );
}
export default Friends;