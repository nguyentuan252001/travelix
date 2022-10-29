import React from 'react'
import CommentCustomer from '../../../components/CommentCustomer'
import cus1 from "../../../assets/images/cus1.webp"
import cus2 from "../../../assets/images/cus2.webp"
import cus3 from "../../../assets/images/cus3.webp"

import { GiSchoolBag, GiFlowerPot, GiBattleship } from "react-icons/gi"

function Comment() {
    return (
        <div className='py-[90px] relative'>
            <h1 className='text-[30px] uppercase text-center font-bold mb-[70px]'>WHAT OUR CLIENTS SAY ABOUT US</h1>
            <div className='w-[1220px] mx-auto grid grid-cols-3 grid-flow-row gap-3'>
                <CommentCustomer icon={<GiSchoolBag />} images={cus1} name="Carla smith" date="May 24, 2022" content="Best holliday ever">
                    Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.
                </CommentCustomer>
                <CommentCustomer icon={<GiFlowerPot />} images={cus2} name="Carla smith" date="May 24, 2022" content="Best holliday ever">
                    Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.
                </CommentCustomer>
                <CommentCustomer icon={<GiBattleship />} images={cus3} name="Carla smith" date="May 24, 2022" content="Best holliday ever">
                    Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.
                </CommentCustomer>
            </div>
            <div className='absolute bottom-0 left-0 right-0 h-[2px] w-full bg-gradient-to-r from-primary-color to-primary-color-to'></div>
        </div>
    )
}

export default Comment