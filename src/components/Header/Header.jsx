import logo from './../../logo.svg';
import classes from './Header.module.scss';



const Header = ()=>{
  return(
    <header className={classes.App_header}>
      <img src={logo} className="App-logo" alt="logo" />
      <span>React</span>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}
export default Header;