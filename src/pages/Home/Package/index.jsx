import React from 'react'
import { BsStarFill } from "react-icons/bs"
import ButtonPrimary from '../../../components/Button/ButtonPrimary'
import packages from "../../../assets/images/package.webp"

function Package() {
    return (
        <div style={
            {
                background: `url(${packages})`,
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '645px',
                position: 'relative',
            }
        }>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-primary-color to-primary-color-to opacity-70'></div>
            <div className='w-[1220px] text-center mx-auto bg-white text-black absolute center-transform p-[70px]'>
                <h1 className='text-[30px] mb-2 font-bold'>MALDIVES DELUXE PACKAGE</h1>
                <ul className='flex items-center justify-center gap-2 mb-4'>
                    <li className='text-[#ffeb8d]'><BsStarFill size={20} /></li>
                    <li className='text-[#fed46b]'  ><BsStarFill size={20} /></li>
                    <li className='text-[#fbb53d]'  ><BsStarFill size={20} /></li>
                    <li className='text-[#fa9e1b]'  ><BsStarFill size={20} /></li>
                    <li className='text-[#a5a5a5]'  ><BsStarFill size={20} /></li>
                </ul>
                <p className='text-[14px] text-gray-400 mb-20 leading-8 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu,
                    vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.</p>
                <ButtonPrimary>Book Now</ButtonPrimary>
            </div>
        </div>
    )
}

export default Package