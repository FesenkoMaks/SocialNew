import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import style from "./Search.module.scss"
import Icons from "../Icon/Icon";


type InputPropsType
    = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


const Search = (props: InputPropsType) => {
    return (
        <div className={style.content}>
            <div className={style.icon}>{Icons.Search()}</div>
            <input {...props} className={style.input} placeholder={'Search'}/>
        </div>
    )
}

export default React.memo(Search)