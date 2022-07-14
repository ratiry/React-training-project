
import classes from './SideBar.module.scss';
console.log(classes);
const SideBar = function(){
  return(
    <div className = {classes.sidebar}>
      <div className={`${classes.item} ${classes.active}`}>
        <img src='https://www.svgrepo.com/show/303500/react-1-logo.svg' className="App-logo" alt="logo" />
       <a href ='#1'>Lorem</a>
      </div>
      <div className={classes.item}>
        <img src='https://www.svgrepo.com/show/303500/react-1-logo.svg' className="App-logo" alt="logo" />
        <a href ='#2'>Text</a>
      </div>
      <div className={classes.item}>
        <img src='https://www.svgrepo.com/show/303500/react-1-logo.svg' className="App-logo" alt="logo" />
        <a href ='#3'>Text 2</a>
      </div>
  </div>
  );
}
export default SideBar;