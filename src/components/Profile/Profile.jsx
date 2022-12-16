import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let postsData = [                /* аля БД постов на серваке */
  {id : 1, message: "HI, bitches!!!", likesCount: 12},
  {id : 2, message: "Bla bla bla fuck you!", likesCount: 16},
]

const Profile = () => {
  return (
    <div className={classes.content}>
      <ProfileInfo/>
      <MyPosts />
    </div>
  );
};
export default Profile;
