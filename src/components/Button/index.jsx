import React from 'react'
import { Link } from 'react-router-dom';
import { BsDot } from "react-icons/bs"

function Button({ to, href, leftIcon, rightIcon, children, onClick, className, passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }


    return (
        <Comp className={className} {...props}>
            {leftIcon && <span className='text-[13px]' >{leftIcon}</span>}
            <span className='flex items-center'>{children}</span>
            {rightIcon && <span className='text-[24px] px-2' >{rightIcon}</span>}
            <div className='flex'>
                <span className='-mr-[14px]'><BsDot size={26} /></span>
                <span className='-mr-[14px] opacity-70'><BsDot size={26} /></span>
                <span className='opacity-50'><BsDot size={26} /></span>
            </div>
        </Comp>
    )
}

export default Button