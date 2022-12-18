import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let post = props.posts.map(p => <Post message={p.message} likesCount = {p.likesCount}/>)

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
      <button>Add post</button>
      </div>
      <div className={classes.posts}>
      {post}
      </div>
    </div>
  );
};
export default MyPosts;
