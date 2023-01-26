import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";
// import Profile_head from './../../../assets/images/Profile_head.png';
import userPhoto from "../../../assets/images/unknown_user.jpg";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={classes.wrapper}>
      {/* <div>
        <img className ={classes.ProfileInfo_img} src={Profile_head} alt=""/>
      </div> */}

      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large === null ? userPhoto : props.profile.photos.large } alt='user_ava' className={classes.user_profile_photo}></img>
        <div className={classes.user}>

            <ProfileStatus status={"Привет петахи!"}/>
          
          <h3>{props.profile.fullName}</h3>
          <p>{props.profile.aboutMe}</p>
          {props.profile.lookingForAJob === true ? <p>Уже работаю разрабом</p> : <p>Ищу работу</p> }

        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
