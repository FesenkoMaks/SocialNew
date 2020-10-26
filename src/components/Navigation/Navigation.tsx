import React from "react";
import style from "./Navigation.module.scss"
import NavItem from "../../common/NavItem/NavItem";
import Icons from "../../common/Icon/Icon";

export const Navigation = () => {
    return (
        <div className={style.header}>
            <NavItem navIcon={Icons.Home()} navUrl={'Profile'}/>
            <NavItem navIcon={Icons.News()} navUrl={'News'}/>
            <NavItem navIcon={Icons.Message()} navUrl={'Message'}/>
            <NavItem navIcon={Icons.User()} navUrl={'Friends'}/>
            <NavItem navIcon={Icons.UserFriend()} navUrl={'Users'}/>
            <NavItem navIcon={Icons.Camera()} navUrl={'Photos'}/>
            <NavItem navIcon={Icons.Music()} navUrl={'Music'}/>
            <NavItem navIcon={Icons.Film()} navUrl={'Video'}/>
        </div>
    )
}