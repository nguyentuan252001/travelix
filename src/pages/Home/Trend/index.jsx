import React from 'react'
import TrendItem from '../../../components/TrendItem'
import trend1 from "../../../assets/images/trend/trend1.webp"
import trend2 from "../../../assets/images/trend/trend2.webp"
import trend3 from "../../../assets/images/trend/trend3.webp"
import trend4 from "../../../assets/images/trend/trend4.webp"
import trend5 from "../../../assets/images/trend/trend5.webp"
import trend6 from "../../../assets/images/trend/trend6.webp"
import trend7 from "../../../assets/images/trend/trend7.webp"
import trend8 from "../../../assets/images/trend/trend8.webp"

function Trend() {
    return (
        <div className='py-[70px]'>
            <h1 className='uppercase text-[30px] font-bold text-center'>TRENDING NOW</h1>
            <div className='w-[1220px] mx-auto grid grid-cols-4 grid-flow-row gap-12 mt-[30px]'>
                <TrendItem images={trend1} name="Grand Hotel" price="182" address="Madrid, spain" />
                <TrendItem images={trend2} name="Grand Hotel" price="182" address="Madrid, spain" />
                <TrendItem images={trend3} name="Grand Hotel" price="182" address="Madrid, spain" />
                <TrendItem images={trend4} name="Grand Hotel" price="182" address="Madrid, spain" />
                <TrendItem images={trend5} name="Grand Hotel" price="182" address="Madrid, spain" />
                <TrendItem images={trend6} name="Grand Hotel" price="182" address="Madrid, spain" />
                <TrendItem images={trend7} name="Grand Hotel" price="182" address="Madrid, spain" />
                <TrendItem images={trend8} name="Grand Hotel" price="182" address="Madrid, spain" />
            </div>
        </div>
    )
}

export default Trend