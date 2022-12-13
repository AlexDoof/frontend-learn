import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <img
          className={classes.ProfileInfo_img}
          src="https://www.rabstol.net/uploads/gallery/comthumb/283/rabstol_net_thunderstorm_16.jpg"
          alt=""
        />
      </div>

      <div className={classes.descriptionBlock}>AVA + DESCRIPTION</div>
    </div>
  );
};
export default ProfileInfo;
