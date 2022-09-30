import classes from './Users.module.scss';
import User_List from './User/User_List';
let Users=(props)=>{
let Users_elements = props.Users.Users_array.map((u) => <User_List key={u.id} name={u.name} followed={u.followed} description={u.description} location={u.location} photoURL={u.photoURL} follow={props.follow} unfollow={props.unfollow} id={u.id}/>)
 console.log(Users_elements);
  return(
    <div className={classes.users}>
      <h4>Users</h4>
      <div className={classes.user_container}>
        {Users_elements}
      </div>
    </div>
  )
}
export default Users;