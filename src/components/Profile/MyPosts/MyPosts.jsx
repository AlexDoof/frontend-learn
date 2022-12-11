import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>

      <textarea></textarea>
      <button>Add post</button>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
export default MyPosts;
