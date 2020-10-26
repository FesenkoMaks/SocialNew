import React from "react";
import style from "./ProfileAvatar.module.scss"
import Button from "../../../common/Button/Button";

const ProfileAvatar = () => {
    return (
        <div className={style.profileAvatar}>
            <img src="https://via.placeholder.com/200" alt=""/>
            <Button color={'secondary'} labelButton={'edit'}/>
        </div>
    )
}

export default ProfileAvatar