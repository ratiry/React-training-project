import Preloader from '../Preloader/Preloader';
import logo from './../../logo.svg';
import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';



const Header = (props)=>{
  let cases_auth = [<Preloader/>,<NavLink to={'/login'}><span>login</span></NavLink>,<span>{props.auth.email}</span>]
  let Case = -1;
  if(props.auth.email === 'none'){
    Case=1;
  }else if(props.auth.email ===null){
    Case=0;
  }else{
    Case =2;
  }
  return(
    <header className={classes.App_header}>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
       <span>React</span>
        <div className={classes.auth_block}>
          {cases_auth[Case]}
        </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}
export default Header;