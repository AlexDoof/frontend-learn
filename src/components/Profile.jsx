import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          className="c_img"
          src="https://public.realtysystems.ru/user/14624/13315/banners/6e4d3258cf787329ecd80804acece5e4.jpg"
        />
      </div>
      <div> ava + description</div>
      <div>
        {" "}
        My posts
        <div>New post</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
};
export default Profile;
