import React from 'react'
import { BsStarFill } from "react-icons/bs"
import ButtonPrimary from '../Button/ButtonPrimary'
function ToursItem({ name, price, images }) {
    return (
        <div className='w-[380px] h-[425px] text-center relative bg-center bg-no-repeat' style={{
            background: `url(${images})`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
        }}>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-second'></div>
            <div className='relative z-40 center-transform'>
                <div className='bg-primary-color inline-block py-1 text-[13px] text-white px-[40px] rounded-full'>May 15th - July 01st</div>
                <div className='py-[70px] text-white'>
                    <h1 className='text-[59px] font-bold'>{name}</h1>
                    <p className='text-[14px] mb-2 '>From ${price}</p>
                    <ul className='flex items-center justify-center gap-2'>
                        <li className='text-[#ffeb8d]'><BsStarFill size={20} /></li>
                        <li className='text-[#fed46b]'  ><BsStarFill size={20} /></li>
                        <li className='text-[#fbb53d]'  ><BsStarFill size={20} /></li>
                        <li className='text-[#fa9e1b]'  ><BsStarFill size={20} /></li>
                        <li className='text-[#a5a5a5]'  ><BsStarFill size={20} /></li>
                    </ul>
                </div>
                <ButtonPrimary>See more</ButtonPrimary>
            </div>
        </div>
    )
}

export default ToursItem