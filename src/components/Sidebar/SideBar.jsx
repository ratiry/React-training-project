
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.scss';
import Friends from './Friends/Friends';
console.log(classes);
const isActive=({isActive}) => ({color: isActive ? 'gold' : 'white'});
const SideBar = function(){
  return(
    <div className = {classes.sidebar}>
      <div className={classes.item} >
        <img src='https://www.svgrepo.com/show/303500/react-1-logo.svg' className="App-logo" alt="logo" />
       <NavLink to ='/Wall' style={isActive}>Wall</NavLink>
      </div>
      <div className={classes.item}>
        <img src='https://www.svgrepo.com/show/303500/react-1-logo.svg' className="App-logo" alt="logo" />
        <NavLink to ='/Dialogs' style={isActive}>Dialogs</NavLink>
      </div>
      <div className={classes.item}>
        <img src='https://www.svgrepo.com/show/303500/react-1-logo.svg' className="App-logo" alt="logo" />
        <NavLink to ='/Messages' style={isActive}>Messages</NavLink>
      </div>
      <Friends/>
  </div>
  );
}
export default SideBar;