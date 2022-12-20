import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let post = props.posts.map(p => <Post message={p.message} likesCount = {p.likesCount}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref = {newPostElement}></textarea>
      </div>
      <div>
      <button onClick={ addPost } >Add post</button>
      </div>
      <div className={classes.posts}>
      {post}
      </div>
    </div>
  );
};
export default MyPosts;
