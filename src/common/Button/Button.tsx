import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import style from "./Button.module.scss"

type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    &{ color: 'primary' | 'secondary', labelButton: string , buttonIcon?: any}

const Button = ({color, labelButton, buttonIcon, ...props}: ButtonPropsType) => {
    return (
        <button
            {...props}
            className={color === 'primary'
                ? style.primary
                : style.secondary}
        >{buttonIcon && buttonIcon}{labelButton}</button>
    )
}

export default Button