import classes from './Dialogs.module.scss';
import User from './User/User';
import Message from './Message/Message';
const Dialogs =(props)=>{
  // let dataUsers=[
  //   {name:'Jem',id:1},
  //   {name:'Jack',id:2},
  //   {name:'Jerry',id:3},
  //   {name:'ggggggggggggg',id:4, },
  // ];
  // let dataMessages=[
  //   { message:'Hi'},
  //   { message:'gibberish'},
  //   { message:'fdghj'},

  // ]
  let Messages_elements = props.dataMessages.map( (message) => <Message message={message.message} />)
  let Dialogs_elements = props.dataUsers.map( (name) => <User name={name.name} id={name.id} />)
  return(
    <div className={classes.Dialogs}>
      <h4>Dialogs</h4>
      <div className={classes.Dialogs_inner}>
      <div className={classes.Dialogs_items}>   
          {  Dialogs_elements}
      </div>
        <div className={classes.messages}>
          { Messages_elements }
        </div>
      </div>
    </div>
  );
}
export default Dialogs;