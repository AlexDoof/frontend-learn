import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


let postsData = [                /* аля БД постов на серваке */
  {id : 1, message: "HI, bitches!!!", likesCount: 12},
  {id : 2, message: "Bla bla bla fuck you!", likesCount: 16},
]

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
      <Post message={postsData[0].message} likesCount = {postsData[0].likesCount}/>
      <Post message={postsData[1].message} likesCount = {postsData[1].likesCount} />
      </div>
    </div>
  );
};
export default MyPosts;
