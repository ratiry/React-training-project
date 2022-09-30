import classes from './../SideBar.module.scss';
import { NavLink } from 'react-router-dom';
let Link = (props)=>{
  const isActive=({isActive}) => ({color: isActive ? 'gold' : 'white'});
  return(
    <div className={classes.item} >
      <img src='https://www.svgrepo.com/show/303500/react-1-logo.svg' className="App-logo" alt="logo" />
    <NavLink to ={props.to} style={isActive}>{props.name}</NavLink>
  </div>
  )
}
export default Link;