import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.scss';
let User =(props)=>{
  return(
    <div className={classes.item}>
      <NavLink to={'/Dialogs/' + props.id} ><span>{props.name}</span> </NavLink>
    </div>
  );
}
export default User;