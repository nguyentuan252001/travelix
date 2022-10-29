import React from 'react'
import StatisticItem from './StatisticsItem'
import thailand from "../../../assets/images/thailand.webp"
import Button from '../../../components/Button'
import { TbFence } from 'react-icons/tb'
import { GiFishing, GiSchoolBag } from 'react-icons/gi'
import { AiOutlineGlobal } from 'react-icons/ai'
function Statistics() {
    return (
        <div>
            <div className='w-[1220px] mx-auto py-[90px] px-[40px] text-center'>
                <h1 className='title mb-4'>YEAR STATISTICS</h1>
                <p className='text-gray-300 leading-8 text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula.</p>

                <div>
                    <div className='flex justify-between items-center text-primary-color font-bold text-[16px] px-10 mb-10'>
                        <h1>2021</h1>
                        <h1>2022</h1>
                    </div>
                    <StatisticItem color="#000" lastYear="1642" nowYear="3527" percent="115" />
                    <StatisticItem color="#a95ce4" lastYear="768" nowYear="145" percent="81" />
                    <StatisticItem color="#ff0000" lastYear="11546" nowYear="9321" percent="19" />
                    <StatisticItem color="#fa9e1b" lastYear="3729" nowYear="17429" percent="36" />
                </div>
            </div>
            <div className='w-[1220px] mx-auto py-8 px-[200px] bg-cover bg-center bg-no-repeat text-white' style={{ backgroundImage: `url(${thailand})` }}>
                <h1 className='text-[50px] uppercase font-bold '>thailand</h1>
                <p className='text-[18px] font-bold py-4'>From $999</p>
                <Button className="btn btn-primary hover:bg-gradient-to-l transition-all">See more</Button>
            </div>

            <div className='grid grid-cols-4 grid-flow-row gap-4 text-center w-[1220px] mx-auto py-[90px]'>
                <div>
                    <TbFence size={56} className="inline-block text-pink-700" />
                    <h1 className='text-[48px] font-semibold py-2'>255</h1>
                    <p className='text-gray-500 uppercase'>Clients</p>
                </div>
                <div>
                    <GiFishing size={56} className="inline-block text-[#a95ce4]" />
                    <h1 className='text-[48px] font-semibold py-2'>1176</h1>
                    <p className='text-gray-500 uppercase'>Clients</p>
                </div>
                <div>
                    <AiOutlineGlobal size={56} className="inline-block text-[#ff0000]" />
                    <h1 className='text-[48px] font-semibold py-2'>39</h1>
                    <p className='text-gray-500 uppercase'>Clients</p>
                </div>
                <div>
                    <GiSchoolBag size={56} className="inline-block text-[#fa9e1b]" />
                    <h1 className='text-[48px] font-semibold py-2'>127</h1>
                    <p className='text-gray-500 uppercase'>Clients</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics