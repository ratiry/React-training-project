import classes  from './../Dialogs.module.scss';

let Message =(props)=>{
  return(
    <div className={classes.message}> <p> {props.message}</p> </div>
  );
}
export default Message;