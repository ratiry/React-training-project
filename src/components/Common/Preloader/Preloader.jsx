import loading_gif from './../../../images/loading_gif.gif';
import classes from './Preloader.module.scss';
let Preloader=(props)=>{
  return(
    <img src={loading_gif} className={classes.Preloader}/>
  )
}
export default Preloader;