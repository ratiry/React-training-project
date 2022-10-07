import classes from './Users.module.scss';
import axios from 'axios';
import User_List from './User/User_List';
let Users=(props)=>{
  let getUsers = ()=>{
    if(props.Users.Users_array.length===0){
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(data=> {
        console.log(data.data.items);
        props.setUsers(data.data.items)
    })
  }
    // props.setUsers([
    //   {id:1,followed:false,name:'Slava',description:'learing React', location:{country:'Russia',city:'Chicago'}, photoURL:'https://u.foxford.ngcdn.ru/uploads/avatars/user/avatar/7462645/retina_d4b6b2326c37010d.jpg'},
    //   {id:2,followed:true,name:'Steve',description:'dwelling in Tailnand', location:{country:'Elngland',city:'CarrickFergus'}, photoURL:'https://a.foxford.ngcdn.ru/assets/fallback/avatars/faceholders/120x120/114-8e3063d9e24977b2a1f91881eab4311a5f183c71e3efb1d830c42446432d13e0.png'},
    //   {id:3,followed:false,name:'Nastya',description:' NoNe', location:{country:'Russia',city:'Moscow'}, photoURL:'https://u.foxford.ngcdn.ru/uploads/avatars/user/avatar/7462645/retina_d4b6b2326c37010d.jpg'},
    // ])
  }
  let Users_elements = props.Users.Users_array.map((u) => <User_List key={u.id} name={u.name} followed={u.followed} description={u.status} location={u.location} photoURL={u.photos.small} follow={props.follow} unfollow={props.unfollow} id={u.id}/>)
  return(
    <div className={classes.users}>
      <h4>Users</h4>
      <button onClick={getUsers}>Get users</button>
      <div className={classes.user_container}>
        
        {Users_elements}
      </div>
    </div>
  )
}
export default Users;