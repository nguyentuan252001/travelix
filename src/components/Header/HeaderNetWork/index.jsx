import React from 'react'
import { Link } from 'react-router-dom'
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa"
function HeaderNetWork() {
    return (
        <div className='bg-primary '>
            <div className='header-flex h-default-height-network'>
                <div className='text-[12px]'>+84 357 751 334</div>
                <div className='flex flex-1 items-center gap-6 ml-12'>
                    <Link className='hover:text-primary-color transition-all'><FaPinterestP size={12} /></Link>
                    <Link className='hover:text-primary-color transition-all'><FaFacebookF size={12} /></Link>
                    <Link className='hover:text-primary-color transition-all'><FaTwitter size={12} /></Link>
                    <Link className='hover:text-primary-color transition-all'><FaDribbble size={12} /></Link>
                    <Link className='hover:text-primary-color transition-all'><FaBehance size={12} /></Link>
                    <Link className='hover:text-primary-color transition-all'><FaLinkedinIn size={12} /></Link>
                </div>
                <div className='flex items-center uppercase text-[10px] gap-1'>
                    <div>
                        <Link className='hover:text-primary-color transition-all'>Login</Link>
                    </div>
                    <div className='w-[1px] bg-slate-100 h-3'></div>
                    <div>
                        <Link className='hover:text-primary-color transition-all'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderNetWork