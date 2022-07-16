import classes from './Content.module.scss';
import Textarea from '../Textarea_wall/Textarea_wall';
import Posts from './Posts';
import Wall from './wall';
const Content = function(){
  return(
    <div className ={classes.content}>
      <Wall/>
   </div>
  );
}
export default Content;