import React from 'react'
import Button from '../../../components/Button'
import tour from '../../../assets/images/about/besttour.png'
function BestTour() {
    return (
        <div className=' bg-gray-100 '>
            <div className='w-[1220px] mx-auto grid grid-cols-2 grid-flow-row py-[90px]'>
                <div>
                    <img className='w-full' src={tour} alt="sd" />
                </div>
                <div className='ml-4 leading-8 text-justify'>
                    <h1 className='title mb-14'>WE HAVE THE BEST TOURS</h1>
                    <p className='text-gray-400 text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum quam placerat non. Etiam venenatis nibh augue, sed eleifend justo tristique eu</p>
                    <Button className='mt-8 btn color-primary hover:bg-gradient-to-l transition duration-1000  ease-linear'>See more</Button>
                </div>
            </div>
        </div>
    )
}

export default BestTour