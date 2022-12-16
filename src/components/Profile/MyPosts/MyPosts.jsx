import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [                /* аля БД постов на серваке */
  {id : 1, message: "HI, bitches!!!", likesCount: 12},
  {id : 2, message: "Bla bla bla fuck you!", likesCount: 16},
  {id : 2, message: " пук пук!", likesCount: 336},
  {id : 2, message: "ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ!!!!!!!!!!!", likesCount: 1236},
]

let post = postsData.map(p => <Post message={p.message} likesCount = {p.likesCount}/>)

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
      {post}
      </div>
    </div>
  );
};
export default MyPosts;
