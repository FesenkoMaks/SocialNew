import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './HeaderButton.module.scss'

type InputPropsType
    = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { labelTitle?: any};

const HeaderButton = (props: InputPropsType) => {
    const {labelTitle, ...restProps} = props
    return (
        <button className={style.btn} {...restProps}> {props.labelTitle}</button>
    )
}

export default React.memo(HeaderButton)
