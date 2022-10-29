import React from 'react'
import ToursItem from '../../../components/ToursItem'
import xintro from "../../../assets/images/xintro_1.webp"
import xintro2 from "../../../assets/images/xintro_2.webp"
import xintro3 from "../../../assets/images/xintro_3.webp"

function Tours() {
    return (
        <div className='text-center py-[50px] w-[1220px] mx-auto'>
            <h1 className='text-[36px] font-bold mb-[30px]'>We have the best tours</h1>
            <p className='text-gray-400 text-[24px] italic font-sans mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
                Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
            <div className='grid grid-cols-3 grid-flow-row'>
                <ToursItem name="Mauritius" price="1450" images={xintro} />
                <ToursItem name="Greece" price="1450" images={xintro2} />
                <ToursItem name="Scotland" price="1450" images={xintro3} />
            </div>
        </div>
    )
}

export default Tours