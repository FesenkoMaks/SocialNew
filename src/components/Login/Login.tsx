import React from "react";
import style from "./Login.module.scss"
import Input from "../../common/Input/Input";
import Checkbox from "../../common/Checkbox/Checkbox";
import Button from "../../common/Button/Button";

export const Login = () => {
    return (
        <div className={style.login}>
            <div className={style.content}>
                <div className={style.content_item}>
                    <Input labelTitle={'Логин'}/>
                </div>
                <div className={style.content_item}>
                    <Input labelTitle={'Пароль'} type={'password'}/>
                </div>
                <div className={style.content_item}>
                    <Checkbox labelTitle={'Запомнить меня'}/>
                </div>
                <div className={style.content_item}>
                    <Button color={'primary'} labelButton={'Войти'}/>
                </div>
            </div>
        </div>
    )
}

