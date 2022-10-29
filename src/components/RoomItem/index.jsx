import React from 'react'
import { BsBicycle, BsStarFill } from "react-icons/bs"
import { TbFence } from "react-icons/tb"
import { GiClockwork } from "react-icons/gi"
import { RiShip2Line } from "react-icons/ri"
import { Link } from 'react-router-dom'
import Button from '../Button'
function RoomItem({ name, price, images, children, btn, review }) {
    return (
        <div className='flex mb-16'>
            <div className='relative min-w-[300px] max-w-[410px] min-h-[240px] max-h-[290px] w-full h-full' style={
                {
                    background: ` url(${images})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                }
            }>

                <div className='bg-primary-color absolute text-white bottom-6 py-1 px-10 uppercase font-bold hover:opacity-70 cursor-pointer transition duration-300 ease-linear'>{name}</div>
            </div>
            <div className='pl-3 relative min-w-[300px]'>
                <div>
                    <div className='flex items-center justify-between'>
                        {
                            !review ?
                                <div>
                                    <h1 className='text-[36px] text-primary-color font-bold -mt-4'>${price}<p className='text-[14px] text-gray-400 font-thin inline-block'>per night</p></h1>
                                    <ul className='flex items-center gap-2 mb-4'>
                                        <li className='text-[#ffeb8d]'  ><BsStarFill size={18} /></li>
                                        <li className='text-[#fed46b]'  ><BsStarFill size={18} /></li>
                                        <li className='text-[#fbb53d]'  ><BsStarFill size={18} /></li>
                                        <li className='text-[#fa9e1b]'  ><BsStarFill size={18} /></li>
                                        <li className='text-[#a5a5a5]'  ><BsStarFill size={18} /></li>
                                    </ul>
                                </div> :
                                <>
                                    <div>
                                        <h1 className='text-[36px] text-primary-color font-bold -mt-4'>${price}<p className='text-[14px] text-gray-400 font-thin inline-block'>per night</p></h1>
                                        <ul className='flex items-center gap-2 mb-4'>
                                            <li className='text-[#ffeb8d]'  ><BsStarFill size={18} /></li>
                                            <li className='text-[#fed46b]'  ><BsStarFill size={18} /></li>
                                            <li className='text-[#fbb53d]'  ><BsStarFill size={18} /></li>
                                            <li className='text-[#fa9e1b]'  ><BsStarFill size={18} /></li>
                                            <li className='text-[#a5a5a5]'  ><BsStarFill size={18} /></li>
                                        </ul>
                                    </div>
                                    <div className='flex items-center'>
                                        <div>
                                            <h1 className='text-[14px] uppercase font-bold'>Very good</h1>
                                            <p className='text-gray-400 text-[14px]'>100 reviews</p>
                                        </div>
                                        <span className='bg-primary-color p-2 ml-2 rounded-full text-white text-[28px] font-bold'>8.1</span>
                                    </div>
                                </>
                        }

                    </div>
                    <span className='text-gray-400 font-normal text-[14px]'>{children}</span>
                    <div className='flex items-center gap-3 mt-4 text-gray-300'>
                        <TbFence size={30} />
                        <GiClockwork size={30} />
                        <BsBicycle size={30} />
                        <RiShip2Line size={30} />
                    </div>
                </div>
                <div className=''>
                    {btn ? <div className='flex justify-end'><Button className='btn bg-primary'> Book now</Button></div> : <span><Link className='hover:text-primary-color transition duration-300 ease-linear font-bold uppercase text-[14px]'>Read More</Link></span>}
                </div>
                {/* 
                <Link className='hover:text-primary-color transition duration-300 ease-linear font-bold uppercase text-[14px] absolute bottom-0'>Read More</Link> */}
            </div>
        </div>
    )
}

export default RoomItem