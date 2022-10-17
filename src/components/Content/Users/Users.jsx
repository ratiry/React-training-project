import classes from './Users.module.scss';
import axios from 'axios';
import User_List from './User/User_List';
import React from 'react';
const api = axios.create({})
class Users extends React.Component{
  componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}&limit=50`).then(data=> {
        this.props.setUsers(data.data.items);
        this.props.SetTotalCount(data.data.totalCount);
        this.props.SetPages();
      })//multiplies copies without condition
  }
  AfterPageArray=()=>{
    let elements = this.props.AfterCurrentPageArray.map(p=>{return <span onClick={()=>{ this.OnPageChange(p)}} >{p}</span>})
    return elements;
  }
  BeforePageArray=()=>{
    let elements = this.props.BeforeCurrentPageArray.map(p=>{return <span onClick={()=>{ this.OnPageChange(p)}} >{p}</span>})
    return elements;
  }
  Users_elements =()=>{
    let elements= this.props.Users.Users_array.map((u) => <User_List key={u.id} name={u.name} followed={u.followed} description={u.status} location={u.location} photoURL={u.photos.small} follow={this.props.follow} unfollow={this.props.unfollow} id={u.id}/>);
    return elements;
  }

  OnPageChange=(p)=>{
    this.props.SetCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.PageSize}`).then(data=> {
      this.props.setUsers(data.data.items);
      this.props.SetPages();
      console.log(this.props.CurrentPage);
    })
  }
  OnButtonPageChange=(type)=>{
    if(type=='B'){
      if(this.props.CurrentPage -1!==0){
        this.props.buttonBackward();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage-1}&count=${this.props.PageSize}&limit=50`).then(data=> {
          this.props.setUsers(data.data.items);
          this.props.SetPages();
          console.log(data.data);
          // this.props.SetTotalCount(data.data.totalCount)
        })
      }   
    }else if(type ==='F'){
      console.log(this.props.CurrentPage+1)
      if(Math.ceil(this.props.TotalUsersCount/this.props.PageSize) < this.props.CurrentPage+1){
    
      }else{
        this.props.buttonForward(); 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage+1}&count=${this.props.PageSize}&limit=50`).then(data=> {
          this.props.setUsers(data.data.items);
          this.props.SetPages();
          console.log(data.data);
          // this.props.SetTotalCount(data.data.totalCount)
        })//multiplies copies without condition  
      }
    }
  }
  render(){
    let PagesCount = this.props.TotalUsersCount/this.props.PageSize;
    let Pages = [];
    for(let i=0;i<PagesCount;i++){
      Pages.push(i+1);
    }
    let PagesListElememts = Pages.map(p=>{return <span onClick={()=>{ this.OnPageChange(p)}} className={this.props.Users.CurrentPage===p && classes.selected}>{p}</span>})
    return(
      <div className={classes.users}>
      <h4>Users</h4>
      <button onClick={()=>{this.OnButtonPageChange('B')}}>backward</button>
      <button onClick={()=>{this.OnButtonPageChange('F')}}>forward</button>
      <div className={classes.pages_container}>
        {/* {PagesListElememts} */}
        {this.BeforePageArray()}
        <span  className={classes.selected}>{this.props.CurrentPage}</span>
        {this.AfterPageArray()}
      </div>
      <div className={classes.user_container}>
        
        {this.Users_elements()}
      </div>
    </div>
    )
  }
}
export default Users;