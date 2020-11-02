import React from "react";
import style from "./Login.module.scss"
import Input from "../../common/Input/Input";
import Checkbox from "../../common/Checkbox/Checkbox";
import Button from "../../common/Button/Button";
import {useFormik} from "formik";
import {useDispatch, useSelector} from 'react-redux'

export const Login = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: values => {
            disptch
        },
    });
    return (
        <form className={style.login}  onSubmit={formik.handleSubmit}>
            <div className={style.content}>
                <div className={style.content_item}>
                    <Input
                        id="email"
                        type="text"
                        {...formik.getFieldProps('email')}
                        labelTitle={'Логин'}/>
                </div>
                <div className={style.content_item}>
                    <Input
                        id="password"
                        type="password"
                        {...formik.getFieldProps('password')}
                        labelTitle={'Пароль'}
                    />
                </div>
                <div className={style.content_item}>
                    <Checkbox
                        id="rememberMe"
                        type="checkbox"
                        {...formik.getFieldProps('rememberMe')}
                        labelTitle={'Запомнить меня'}/>
                </div>
                <div className={style.content_item}>
                    <Button type={'submit'} color={'primary'} labelButton={'Войти'}/>
                </div>
            </div>
        </form>
    )
}

