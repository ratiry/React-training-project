import classes from './Users.module.scss';
import axios from 'axios';
import User_List from './User/User_List';
import React from 'react';
const api = axios.create({})
class Users extends React.Component{
  componentDidMount(){
    console.log(this.props.Users.Users_array)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}`).then(data=> {
        this.props.setUsers(data.data.items);
        console.log(data.data);
        this.props.SetTotalCount(data.data.totalCount)
      })//multiplies copies without condition
    
  }
  Users_elements =()=>{
    let elements= this.props.Users.Users_array.map((u) => <User_List key={u.id} name={u.name} followed={u.followed} description={u.status} location={u.location} photoURL={u.photos.small} follow={this.props.follow} unfollow={this.props.unfollow} id={u.id}/>);
    return elements;
  }
  OnPageChange=(p)=>{
    this.props.SetCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.PageSize}`).then(data=> {
      this.props.setUsers(data.data.items);
      console.log(this.props.CurrentPage);
    })
  }
  render(){
    let PagesCount = this.props.TotalUsersCount/this.props.PageSize;
    let Pages = [];
    window.PagesCount = PagesCount;
    for(let i=0;i<PagesCount;i++){
      Pages.push(i+1);
    }
    let PagesListElememts = Pages.map(p=>{return <span onClick={()=>{ this.OnPageChange(p)}} className={this.props.Users.CurrentPage===p && classes.selected}>{p}</span>})
    return(
      <div className={classes.users}>
      <h4>Users</h4>
      <div className={classes.pages_container}>
        {/* <span className={classes.selected } >1</span>
        <span>2</span>
        <span>3</span> */}
        {PagesListElememts}
      </div>
      <div className={classes.user_container}>
        
        {this.Users_elements()}
      </div>
    </div>
    )
  }
}
export default Users;