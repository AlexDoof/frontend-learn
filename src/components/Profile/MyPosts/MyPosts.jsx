import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <Post message="HI, bitches!!!" likesCount="2" />
      <Post message="Bla bla bla fuck you!" likesCount="23" />
    </div>
  );
};
export default MyPosts;
