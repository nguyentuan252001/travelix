import React from 'react'
import Button from '../../../components/Button'

function Booking({ children }) {
    return (
        <div className='bg-gradient-to-r from-primary-color to-primary-color-to py-14'>
            <form className='flex justify-center items-center gap-3'>
                <label className="block w-[390px]">
                    <span className="text-booking">
                        Destination
                    </span>
                    <input type="text" className="input-booking focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1" />
                </label>
                <label className="block">
                    <span className="text-booking">
                        Check in
                    </span>
                    <input type="datetime" placeholder='DD-MM-YYYY' className="input-booking focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1" />
                </label>
                <label className="block">
                    <span className="text-booking">
                        Check out
                    </span>
                    <input type="datetime" className="input-booking focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1" />
                </label>
                <label className="block w-[85px]">
                    <span className="text-booking">
                        Adults
                    </span>
                    <input type="number" className="input-booking focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1" />
                </label>
                <label className="block w-[85px]">
                    <span className="text-booking">
                        Children
                    </span>
                    <input type="number" className="input-booking focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1" />
                </label>
                <Button className="btn bg-primary hover:opacity-80">
                    Search
                </Button>
            </form>
        </div>
    )
}

export default Booking