import React from 'react'
import { Link } from 'react-router-dom'
function TrendItem({ images, name, price, address }) {
    return (
        <div className='flex gap-3'>
            <div className=''>
                <img className='w-full rounded-lg hover:rotate-3 hover:scale-105 transition duration-200 ease-linear' src={images} alt='' />
            </div>
            <div className='-mt-1'>
                <Link className='text-[16px] uppercase font-bold hover:text-primary-color transition duration-200 ease-linear'>{name}</Link>
                <h2 className='text-[14px] mb-[2px] text-primary-color font-bold'>From ${price}</h2>
                <h2 className='text-[14px] uppercase text-gray-500'>{address}</h2>
            </div>
        </div>
    )
}

export default TrendItem