import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          className={classes.c_img}
          src="https://public.realtysystems.ru/user/14624/13315/banners/6e4d3258cf787329ecd80804acece5e4.jpg"
        />
      </div>
      <div> New fucking post... </div>
      <MyPosts />
    </div>
  );
};
export default Profile;
