import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <img
          className={classes.ProfileInfo_img}
          src="https://zastavok.net/main/motocycles/165274046957.jpg"
          alt=""
        />
      </div>

      <div className={classes.descriptionBlock}>AVA + DESCRIPTION</div>
    </div>
  );
};
export default ProfileInfo;
