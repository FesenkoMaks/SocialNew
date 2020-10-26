import React from "react";
import style from "./Header.module.scss"
import Search from "../../common/SearchInput/Search";
import HeaderButton from "../../common/HeaderButton/HeaderButton";
import Icons from "../../common/Icon/Icon";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.content}>
                <div className={style.logo}>
                    Hello
                </div>
                <div className={style.search}>
                    <Search/>
                    <div className={style.btn}>
                       <HeaderButton labelTitle={Icons.Bell()}/>
                       <HeaderButton labelTitle={Icons.Music()}/>
                    </div>
                </div>
                <div className={style.login}>
                    login
                </div>
            </div>
        </div>
    )
}