import React from "react";
import MyPosts from "./Profile/MyPosts/MyPosts";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";



const Profile = () => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};
export default Profile;
