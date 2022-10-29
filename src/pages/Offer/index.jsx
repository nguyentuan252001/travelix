import React from 'react'
import about from "../../assets/images/about.jpg"
import MainPage from '../../components/MainPage'
import NamePage from '../../components/MainPage/NamePage'
import Banner from '../../components/Banner'
import Booking from '../Home/Booking'
import ListRoom from './ListRoom'

function Offer() {
  return (
    <>
      <MainPage className='bg-cover bg-bottom-center bg-fixed w-full' images={about}>
        <NamePage>
          <h1 className='text-[70px] uppercase font-extrabold'>OUR OFFERS</h1>
        </NamePage>
        <Banner />
      </MainPage>
      <Booking />
      <ListRoom/>
    </>
  )
}

export default Offer