
import classes from './Users.module.scss';
import User_List from './User/User_List';
let Users = (props)=>{
  let PagesCount = props.TotalUsersCount/props.PageSize;
  let Pages = [];
  for(let i=0;i<PagesCount;i++){
    Pages.push(i+1);
  }
  let Beforelements = props.BeforeCurrentPageArray.map(p=>{return <span onClick={()=>{ props.OnPageChange(p)}} >{p}</span>})
  let Afterelements = props.AfterCurrentPageArray.map(p=>{return <span onClick={()=>{ props.OnPageChange(p)}} >{p}</span>})
  let Userselements= props.Users_array.map((u) => <User_List key={u.id} name={u.name} followed={u.followed} description={u.status} location={u.location} photoURL={u.photos.small} follow={props.follow} unfollow={props.unfollow} id={u.id}/>);

  return(
    <div className={classes.users}>
          <h4>Users</h4>
          <button onClick={()=>{props.OnButtonPageChange('B')}}>backward</button>
          <button onClick={()=>{props.OnButtonPageChange('F')}}>forward</button>
          <div className={classes.pages_container}>
            {/* {PagesListElememts} */}
            {Beforelements}
            <span  className={classes.selected}>{props.CurrentPage}</span>
            {Afterelements}
          </div>
          <div className={classes.user_container}>
            {Userselements}
          </div>
    </div>
  )
}
export default Users;
