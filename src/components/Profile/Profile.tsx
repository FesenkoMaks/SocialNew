import React from "react";
import style from "./Profile.module.scss"
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";

type ProfilePropsType = {

}

const Profile = () => {
    return (
        <div className={style.profileContent}>
            <div className={style.profileInnerLeft}>
                <div className={style.profileAvatar}>
                    <ProfileAvatar/>
                </div>
                <div className={style.profileDownloadPhotos}>
                    download
                </div>
            </div>
            <div className={style.profileInnerRight}>
                <div className={style.profileInfo}>Profile info</div>
            </div>
        </div>
    )
}


export default React.memo(Profile)