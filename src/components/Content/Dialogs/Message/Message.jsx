import classes  from './../Dialogs.module.scss';

let Message =(props)=>{
  if(props.whose=='my'){
    return(
      <div className ={classes.message_container + ' ' + classes.my_message}>
        <p className={classes.Name}>{props.Name}</p>  
      <p className={classes.message}> {props.message}</p>
     </div>
    );
  }else if(props.whose=='conversator'){
    return(
      <div className ={classes.message_container + ' ' + classes.conversator}>
      <p className={classes.Name}>{props.Name}</p>  
    <p className={classes.message}> {props.message}</p>
   </div>
    );
  }
}
export default Message;