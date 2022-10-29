import React from 'react'
import { FaUmbrellaBeach } from 'react-icons/fa'
function StatisticItem({ color, lastYear, nowYear, percent }) {


    return (
        <div className='flex items-center gap-8 mb-10'>
            <div className='flex items-center gap-3 w-[120px]'>
                <FaUmbrellaBeach className='text-primary-color' size={36} />
                <div >
                    <h1 className='text-[24px] font-semibold'>{lastYear}</h1>
                    <h2 className='text-[14px] text-gray-500'>Cilents</h2>
                </div>
            </div>
            <div className='relative flex-1  border-b-[3px] border-gray-300 text-center'>
                <div className='absolute -bottom-[3px] right-0 h-[2px]' style={{ left: `${percent}px`, backgroundColor: `${color}` }}></div>
                <p className='pb-2 text-gray-500'>
                    {percent}%
                </p>
            </div>
            <div className='flex items-center gap-3 w-[120px]'>
                <FaUmbrellaBeach className='text-primary-color' size={36} />
                <div >
                    <h1 className='text-[24px] font-semibold'>{nowYear}</h1>
                    <h2 className='text-[14px] text-gray-500'>Cilents</h2>
                </div>
            </div>
        </div>
    )
}

export default StatisticItem