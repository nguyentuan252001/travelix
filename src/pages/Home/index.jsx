import React from 'react'


import Banner from '../..//components/Banner'
import header from "../../assets/images/bg_header.webp"
import MainPage from '../../components/MainPage'
import ButtonPrimary from '../../components/Button/ButtonPrimary'
import NamePage from '../../components/MainPage/NamePage'

import './Home.css'

import Booking from './Booking'
import Tours from './Tours'
import Package from './Package'
import Room from './Room'
import Comment from './Comment'
import Trend from './Trend'
import ContactMe from './ContactMe'

function Home() {
  return (
    <>
      <MainPage className="bg-top-center bg-cover bg-no-repeat" images={header}>
        <NamePage>
          <h1 className='text-[112px] uppercase font-extrabold'>Discover</h1>
          <h1 className='font-fast-hand text-[100px] font-bold mb-12'>the world</h1>
          <ButtonPrimary>
            Explore Now
          </ButtonPrimary>
        </NamePage>
        <Banner />
      </MainPage>
      <Booking />
      <Tours />
      <Package />
      <Room />
      <Comment />
      <Trend />
      <ContactMe />
    </>
  )
}

export default Home