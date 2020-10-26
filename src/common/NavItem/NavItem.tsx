import React from "react";
import style from "./NavItem.module.scss"
import {NavLink} from "react-router-dom";

type PropsType = {
    navIcon: any
    navUrl: string
}

const NavItem = ({navIcon, navUrl}: PropsType) => {
    return (
        <div className={style.navItem}>
            <NavLink to={`/${navUrl}`}><span className={style.navIcon}>{navIcon}</span>{navUrl}</NavLink>
        </div>
    )
}

export default NavItem