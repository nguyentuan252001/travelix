import React from 'react'
import RoomItem from '../../../components/RoomItem'
import offer1 from "../../../assets/images/offer1.webp"
import offer2 from "../../../assets/images/offer2.webp"
import offer3 from "../../../assets/images/offer3.webp"
import offer4 from "../../../assets/images/offer4.webp"

function Room() {
    return (
        <div className='pt-[90px] bg-[#f3f3f3]'>
            <h1 className='text-[30px] uppercase text-center font-bold mb-[70px]'>THE BEST OFFERS WITH ROOMS</h1>
            <div className='w-[1220px] mx-auto grid grid-cols-2 grid-flow-row gap-3'>
                <RoomItem price="70" name="grand castle" images={offer4} >
                    Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
                </RoomItem>
                <RoomItem price="50" name="Turkey hills" images={offer3} >
                    Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
                </RoomItem>
                <RoomItem price="90" name="Island dream" images={offer2} >
                    Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
                </RoomItem>
                <RoomItem price="30" name="Travel Light" images={offer1} >
                    Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
                </RoomItem>
            </div>
        </div>
    )
}

export default Room