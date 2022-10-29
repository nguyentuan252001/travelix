import React from 'react'
import { Link } from 'react-router-dom'
import blog from "../../assets/images/blog.jpg"
import blog_1 from "../../assets/images/blog_1.jpg"
import MainPage from '../../components/MainPage'
import NamePage from '../../components/MainPage/NamePage'
import { VscSearch } from "react-icons/vsc"
import list1 from "../../assets/images/list1.webp"
import list2 from "../../assets/images/list2.webp"
import list3 from "../../assets/images/list3.webp"
import list4 from "../../assets/images/list4.webp"

function New() {
  return (
    <>
      <MainPage className='bg-cover bg-bottom-center bg-fixed w-full' images={blog}>
        <NamePage>
          <h1 className='text-[70px] uppercase font-extrabold'>the blog</h1>
        </NamePage>
      </MainPage>
      <div className='w-[1220px] mx-auto grid grid-cols-3 grid-flow-row gap-4 py-[70px]'>
        <div className='col-span-2'>
          {/* items 1 */}
          <div className='mb-20'>
            <div className='mb-10 relative'>
              <img className='w-full' src={blog_1} alt="blog_1" />
              <div className='text-white w-[90px] h-[90px] rounded-full bg-primary-color absolute text-center flex flex-col justify-center top-3 left-8'>
                <h1 className='text-[30px] font-bold'>01</h1>
                <p className='text-[13px]'>July, 2022</p>
              </div>
            </div>
            <div>
              <ul className='flex items-center gap-2 text-[14px] font-semibold text-gray-400 mb-4'>
                <li><Link>by Lore Papp |</Link></li>
                <li><Link>Uncategorized |</Link></li>
                <li><Link>3 Comments</Link></li>
              </ul>
              <h1 className='text-[24px] font-semibold mb-10'>Try these new dream destinations</h1>
              <p className='leading-8 text-[14px] text-gray-400 mb-4'>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
              <span className='hover:text-primary-color transition-all uppercase font-bold text-[14px]'><Link>Read More</Link></span>
            </div>
          </div>
          {/* item 2 */}
          <div className='mb-20'>
            <div className='mb-10 relative'>
              <img className='w-full' src={blog_1} alt="blog_1" />
              <div className='text-white w-[90px] h-[90px] rounded-full bg-primary-color absolute text-center flex flex-col justify-center top-3 left-8'>
                <h1 className='text-[30px] font-bold'>01</h1>
                <p className='text-[13px]'>July, 2022</p>
              </div>
            </div>
            <div>
              <ul className='flex items-center gap-2 text-[14px] font-semibold text-gray-400 mb-4'>
                <li><Link>by Lore Papp |</Link></li>
                <li><Link>Uncategorized |</Link></li>
                <li><Link>3 Comments</Link></li>
              </ul>
              <h1 className='text-[24px] font-semibold mb-10'>Try these new dream destinations</h1>
              <p className='leading-8 text-[14px] text-gray-400 mb-4'>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
              <span className='hover:text-primary-color transition-all uppercase font-bold text-[14px]'><Link>Read More</Link></span>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='flex mb-12'>
            <input className='outline-none  border-b-2 border-gray-200 pb-3 text-[12px] w-full' type="text" />
            <span className='border-b-2 border-gray-200 pb-3'><VscSearch size={24} className="font-bold mr-4 hover:text-primary-color transition-all cursor-pointer" /></span>
          </div>
          <div>
            <h1 className='text-[18px] mb-8 font-bold'>Archives</h1>
            <ul className='text-[16px] text-gray-400'>
              <li className='mb-3'><Link>March 2022</Link></li>
              <li className='mb-3'><Link>April  2022</Link></li>
              <li className='mb-3'><Link>May  2022</Link></li>
            </ul>
          </div>

          <div className='mt-60'>
            <h1 className='text-[18px] mb-8 font-bold'>Categories</h1>
            <ul className='text-[16px] text-gray-400'>
              <li className='mb-3'><Link>Travel</Link></li>
              <li className='mb-3'><Link>Exotic Destinations</Link></li>
              <li className='mb-3'><Link>City Breaks</Link></li>
              <li className='mb-3'><Link>Travel Tips</Link></li>
              <li className='mb-3'><Link>Lifestyle & Travel</Link></li>
              <li className='mb-3'><Link>City Breaks</Link></li>
              <li className='mb-3'><Link>Uncategorized</Link></li>
            </ul>
          </div>

          <div className=''>
            <h1 className='text-[18px] mb-8 font-bold'>Categories</h1>
            <div className='grid grid-cols-3 grid-flow-row gap-3'>
              <div><img src={list1} alt="" /></div>
              <div><img src={list2} alt="" /></div>
              <div><img src={list3} alt="" /></div>
              <div><img src={list4} alt="" /></div>
              <div><img src={list1} alt="" /></div>
              <div><img src={list2} alt="" /></div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default New