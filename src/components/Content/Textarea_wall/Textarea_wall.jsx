import classes from './Textarea_wall.module.scss';
function Textarea_wall(){
  return(
    <div className={classes.textarea_container}>
      <p className={classes.offer_to_write}>Write your own gibberish</p>
      <textarea></textarea>
      <button>send</button>
  </div>
  );
};
export default Textarea_wall;