import React from 'react'
import about from "../../assets/images/about.jpg"
import MainPage from '../../components/MainPage'
import NamePage from '../../components/MainPage/NamePage'
import BestTour from './BestTour'
import Statistics from './Statistics'
function About() {
  return (
    <>
      <MainPage className='bg-cover bg-bottom-center bg-fixed w-full' images={about}>
        <NamePage>
          <h1 className='text-[70px] uppercase font-extrabold'>About us</h1>
        </NamePage>
      </MainPage>
      <BestTour />
      <Statistics />
    </>
  )
}

export default About