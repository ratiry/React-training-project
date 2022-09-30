
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.scss';
import Friends from './Friends/Friends';
import Link from './Link/Link';
const isActive=({isActive}) => ({color: isActive ? 'gold' : 'white'});
const SideBar = function(props){
  let Links_elememts = props.SideBar.Links.map( (l)=><Link to={l.to} name={l.name} />);
  
  return(
    <div className = {classes.sidebar}>
      {Links_elememts}
      <Friends Friends={props.SideBar.Friends}/>
  </div>
  );
}
export default SideBar;