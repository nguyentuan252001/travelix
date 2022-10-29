import React from 'react'
import './Banner.css'
function BannerItem({ leftIcon, rightIcon, children, className, style, onClick, passProps }) {

    const props = {
        style,
        onClick,
        ...passProps
    }
    return (
        <div className={className} {...props}>
            {leftIcon && <span className=' pr-2 text-[24px] text-primary-color transition duration-[400ms]' >{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
        </div>
    )
}

export default BannerItem   