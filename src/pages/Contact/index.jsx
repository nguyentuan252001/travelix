import React from 'react'
import { Link } from 'react-router-dom'
import { FaBehance, FaDribbble, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa"
import { SlLocationPin } from "react-icons/sl"
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { HiOutlineMail } from "react-icons/hi"
import contact_bg from "../../assets/images/contact_bg.jpg"
import MainPage from '../../components/MainPage'
import NamePage from '../../components/MainPage/NamePage'
import ContactForm from '../../components/ContactForm'
import background from "../../assets/images/man.png"
import logo from "../../assets/images/logo.webp"
function Contact() {
  return (
    <>
      <MainPage className='bg-cover bg-bottom-center bg-fixed w-full' images={contact_bg}>
        <NamePage>
          <h1 className='text-[70px] uppercase font-extrabold'>ContactS</h1>
        </NamePage>
      </MainPage>

      <div className='relative py-[90px] w-[1220px] mx-auto '>
        <div className=' mb-20'>
          <ContactForm className="color-primary py-[60px] px-[90px] text-white text-center rounded-2xl " />
        </div>
        <div className='relative grid grid-cols-5 grid-flow-row'>
          <div className='col-span-2'>
            <img src={background} alt="" />
          </div>
          <div className='flex mt-10'>
            <div className=''>
              <Link className='flex uppercase items-end gap-3 font-bold -mt-5'>
                <img src={logo} alt="travelix" />
                <h1 className='text-[30px] -mb-[10px]'>travelix</h1>
              </Link>
              <span className='mt-4 px-3 py-5 inline-block text-[16px] text-gray-400 w-[410px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula pretium.</span>
              <div className='flex items-center gap-3 ml-3'>
                <Link className='hover:text-white hover:bg-primary-color text-primary-color transition-all border-[2px] border-primary-color rounded-full p-2'><FaPinterestP size={24} /></Link>
                <Link className='hover:text-white hover:bg-primary-color text-primary-color transition-all border-[2px] border-primary-color rounded-full p-2'><FaFacebookF size={24} /></Link>
                <Link className='hover:text-white hover:bg-primary-color text-primary-color transition-all border-[2px] border-primary-color rounded-full p-2'><FaTwitter size={24} /></Link>
                <Link className='hover:text-white hover:bg-primary-color text-primary-color transition-all border-[2px] border-primary-color rounded-full p-2'><FaDribbble size={24} /></Link>
                <Link className='hover:text-white hover:bg-primary-color text-primary-color transition-all border-[2px] border-primary-color rounded-full p-2'><FaBehance size={24} /></Link>
              </div>
            </div>
            <div className='pl-7 text-[14px] mt-16'>
              <span className='mb-6 inline-block hover:text-primary-color transition-all '>
                <Link className='flex items-center'> <SlLocationPin size={24} className="text-primary-color mr-2" /> K511/55 Trưng Nữ Vương, Đà Nẵng</Link>
              </span>
              <span className='mb-6 inline-block hover:text-primary-color transition-all '>
                <Link className='flex items-center'><BsTelephone size={20} className="text-primary-color mr-2" /> +84 357 751 334</Link>
              </span>
              <span className='mb-6 inline-block hover:text-primary-color transition-all '>
                <Link className='flex items-center'><HiOutlineMail size={20} className="text-primary-color mr-2" /> nguyentuan22552001@gmail.com</Link>
              </span>
              <span className='mb-6 inline-block hover:text-primary-color transition-all '>
                <Link className='flex items-center'><AiOutlineGlobal size={20} className="text-primary-color mr-2" />www.nguyentuan.com.vn</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact