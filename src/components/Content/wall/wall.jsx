import Textarea_wall from '../Textarea_wall/Textarea_wall';
import Posts from './Posts.jsx';

let Wall = function(){
  return(
    <div className="Wall">
      <h4>Wall</h4>
      <Textarea_wall/>
      <Posts/>
    </div>
  );
}
export default Wall;
