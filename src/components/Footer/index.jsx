import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.webp"
import trend2 from "../../assets/images/trend/trend2.webp"
import trend4 from "../../assets/images/trend/trend4.webp"
import trend6 from "../../assets/images/trend/trend6.webp"
import { FaBehance, FaDribbble, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa"
import { AiOutlineCopyright } from "react-icons/ai"

function Footer() {
    return (
        <footer className='bg-primary text-white'>
            <div className='w-[1220px] pt-[90px] mx-auto grid grid-cols-4 grid-flow-row gap-4'>
                <div>
                    <Link className='flex uppercase items-end gap-3 font-bold -mt-5'>
                        <img src={logo} alt="travelix" />
                        <h1 className='text-[30px] -mb-[10px]'>travelix</h1>
                    </Link>
                    <span className='mt-4 px-3 py-5 inline-block text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula pretium.</span>
                    <div className='flex items-center gap-3 ml-3'>
                        <Link className='hover:text-black hover:bg-primary-color transition-all border-[1px] border-primary-color rounded-full p-2'><FaPinterestP size={12} /></Link>
                        <Link className='hover:text-black hover:bg-primary-color transition-all border-[1px] border-primary-color rounded-full p-2'><FaFacebookF size={12} /></Link>
                        <Link className='hover:text-black hover:bg-primary-color transition-all border-[1px] border-primary-color rounded-full p-2'><FaTwitter size={12} /></Link>
                        <Link className='hover:text-black hover:bg-primary-color transition-all border-[1px] border-primary-color rounded-full p-2'><FaDribbble size={12} /></Link>
                        <Link className='hover:text-black hover:bg-primary-color transition-all border-[1px] border-primary-color rounded-full p-2'><FaBehance size={12} /></Link>
                    </div>
                </div>

                <div>
                    <h1 className='footer_name'>Blog Posts</h1>
                    <div className=''>
                        <div className='flex gap-5 mb-4'>
                            <img className='w-[60px] h-[60px]' src={trend2} alt="trend2" />
                            <div>
                                <h1 className='text-[14px] mb-1'>Travel with us this year</h1>
                                <p className='text-[12px] text-primary-color'>July 20, 2022</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-4'>
                            <img className='w-[60px] h-[60px]' src={trend4} alt="trend2" />
                            <div>
                                <h1 className='text-[14px] mb-1'>Travel with us this year</h1>
                                <p className='text-[12px] text-primary-color'>July 20, 2022</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-4'>
                            <img className='w-[60px] h-[60px]' src={trend6} alt="trend2" />
                            <div>
                                <h1 className='text-[14px] mb-1'>Travel with us this year</h1>
                                <p className='text-[12px] text-primary-color'>July 20, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='footer_name'>Tags</h1>
                    <div className='flex flex-wrap'>
                        <span className='hover:bg-primary-color transition-all cursor-pointer border-[1px] text-center py-2 px-4 ml-3 mb-3 text-[12px] inline-block  border-primary-color'><Link>design</Link></span>
                        <span className='hover:bg-primary-color transition-all cursor-pointer border-[1px] text-center py-2 px-4 ml-3 mb-3 text-[12px] inline-block border-primary-color'><Link>fashtion</Link></span>
                        <span className='hover:bg-primary-color transition-all cursor-pointer border-[1px] text-center py-2 px-4 ml-3 mb-3 text-[12px] inline-block border-primary-color'><Link>music</Link></span>
                        <span className='hover:bg-primary-color transition-all cursor-pointer border-[1px] text-center py-2 px-4 ml-3 mb-3 text-[12px] inline-block border-primary-color'><Link>video</Link></span>
                        <span className='hover:bg-primary-color transition-all cursor-pointer border-[1px] text-center py-2 px-4 ml-3 mb-3 text-[12px] inline-block border-primary-color'><Link>party</Link></span>
                        <span className='hover:bg-primary-color transition-all cursor-pointer border-[1px] text-center py-2 px-4 ml-3 mb-3 text-[12px] inline-block border-primary-color'><Link>photography</Link></span>
                        <span className='hover:bg-primary-color transition-all cursor-pointer border-[1px] text-center py-2 px-4 ml-3 mb-3 text-[12px] inline-block border-primary-color'><Link>adventure</Link></span>
                        <span className='hover:bg-primary-color transition-all cursor-pointer border-[1px] text-center py-2 px-4 ml-3 mb-3 text-[12px] inline-block border-primary-color'><Link>travel</Link></span>
                    </div>
                </div>

                <div>
                    <h1 className='footer_name'>Contact info</h1>
                    <div className='pl-7 text-[14px]'>
                        <span className='inline-block mb-6 hover:text-primary-color transition-all'><Link>K511/55 Trưng Nữ Vương, Đà Nẵng</Link></span>
                        <span className='inline-block mb-6 hover:text-primary-color transition-all'><Link>+84 357 751 334</Link></span>
                        <span className='inline-block mb-6 hover:text-primary-color transition-all'><Link>nguyentuan22552001@gmail.com</Link></span>
                        <span className='inline-block mb-6 hover:text-primary-color transition-all'><Link>www.nguyentuan.com.vn</Link></span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-1 py-4 font-bold text-[14px] text-gray-200'>
                Copyright <AiOutlineCopyright /> 2022 By <Link className='text-primary-color'>Nguyen_Van_Tuan</Link>
            </div>
        </footer>
    )
}

export default Footer