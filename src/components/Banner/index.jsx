import React, { useState } from 'react'
import BannerItem from './BannerItem'
import { FaBusAlt, FaHotel, FaPlane } from 'react-icons/fa'
import { GiTwirlyFlower } from 'react-icons/gi'
import { RiShip2Line } from "react-icons/ri"
import { GiPoolDive } from "react-icons/gi"
function Banner() {

    let banners = [
        { id: 1, icon: <FaHotel className='text-white' />, name: "Hotel", className: 'banner rounded-tl-full' },
        { id: 2, icon: <FaBusAlt />, name: "Car rentals", className: 'banner' },
        { id: 3, icon: <FaPlane />, name: "Flights", className: 'banner' },
        { id: 4, icon: <GiTwirlyFlower />, name: "Trips", className: 'banner' },
        { id: 5, icon: <RiShip2Line />, name: "cuises", className: 'banner' },
        { id: 6, icon: <GiPoolDive />, name: "activites", className: 'banner rounded-tr-full' },
    ]
    const [active, setActive] = useState('Hotel')


    return (
        <div className='absolute bottom-0 left-0 right-0'>
            <div className='grid grid-cols-6 grid-flow-row gap-0 w-[1220px] mx-auto bg-white text-black rounded-t-full'>
                {banners.map(item => {
                    return (
                        <BannerItem
                            style={
                                active === item.name ? { backgroundColor: "#fa9e1b", color: "#fff" } : {}
                            }
                            key={item.id}
                            className={item.className}
                            leftIcon={item.icon}
                            onClick={() => setActive(item.name)}
                        >
                            {item.name}
                        </BannerItem>
                    )
                })}

                {/* <BannerItem
                    className='banner rounded-tl-full active'
                    leftIcon={<FaHotel className='text-white' />}
                >
                    Hotels
                </BannerItem>
                <BannerItem
                    className='banner'
                    leftIcon={<FaBusAlt />}
                >
                    Car rentals</BannerItem>
                <BannerItem
                    className='banner'
                    leftIcon={<FaPlane />}
                >
                    Flights
                </BannerItem>
                <BannerItem
                    className='banner'
                    leftIcon={<GiTwirlyFlower />}
                >
                    trips
                </BannerItem>
                <BannerItem
                    className='banner'
                    leftIcon={<RiShip2Line />}
                >
                    cuises
                </BannerItem>
                <BannerItem
                    className='banner rounded-tr-full'
                    leftIcon={<GiPoolDive />}
                >
                    activites
                </BannerItem> */}
            </div>
        </div>
    )
}

export default Banner