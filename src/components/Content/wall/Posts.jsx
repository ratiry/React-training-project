import Post from "./post/Post";
function Posts(){
  return(
    <div className="posts">
      <Post message="5"/>
      <Post/>
      <Post/>

      <Post/>
      <Post/>
    </div>
  );
}
export default Posts;