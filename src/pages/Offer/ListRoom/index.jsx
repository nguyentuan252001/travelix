import React from 'react'
import { BiChevronDown } from "react-icons/bi"
import RoomItem from '../../../components/RoomItem'

import list1 from "../../../assets/images/list1.webp"
import list2 from "../../../assets/images/list2.webp"
import list3 from "../../../assets/images/list3.webp"
import list4 from "../../../assets/images/list4.webp"
function ListRoom() {
    return (
        <div className='mx-auto w-[1220px] py-[90px]'>

            <div className='flex gap-4'>
                <div className='selection'>Price<BiChevronDown size={24} className="text-gray-400 ml-10" /></div>
                <div className='selection'>Location<BiChevronDown size={24} className="text-gray-400 ml-10" /></div>
                <div className='selection'>Stars<BiChevronDown size={24} className="text-gray-400 ml-10" /></div>
                <div className='selection'>Distance from center<BiChevronDown size={24} className="text-gray-400 ml-10" /></div>
                <div className='selection'>reviews<BiChevronDown size={24} className="text-gray-400 ml-10" /></div>
            </div>
            <div className='grid grid-cols-1 grid-flow-row mt-[70px]'>
                <RoomItem images={list1} name="Grand castle" price="70" btn review>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</RoomItem>
                <RoomItem images={list2} name="Grand castle" price="50" btn review>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</RoomItem>
                <RoomItem images={list4} name="Grand castle" price="90" btn review>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</RoomItem>
                <RoomItem images={list3} name="Grand castle" price="30" btn review>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</RoomItem>
                <RoomItem images={list1} name="Grand castle" price="60" btn review>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</RoomItem>
            </div>
        </div>
    )
}

export default ListRoom