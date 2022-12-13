import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
      <Post message="HI, bitches!!!" likesCount="2" />
      <Post message="Bla bla bla fuck you!" likesCount="23" />
      </div>
    </div>
  );
};
export default MyPosts;
