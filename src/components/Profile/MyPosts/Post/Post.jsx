import React from "react";
import classes from './Post.module.css';

const Post = () => {
  return (
    <div>
      <div className={classes.item}>
        <img src="https://w-dog.ru/wallpapers/1/93/296486574365124/avatar-kino-nejtiri.jpg" alt="" />
        Post
        <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  );
};
export default Post;
