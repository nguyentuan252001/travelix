import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VscSearch } from "react-icons/vsc"


function HeaderMain() {

  const [goTop, setGoTop] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  const [active, setActive] = useState("/");
  let classes = 'bg-second fixed w-full z-[9999] h-[110px] flex items-center '

  const navBars = [
    { id: 1, name: "Home", to: '/' },
    { id: 2, name: "About", to: '/about' },
    { id: 3, name: "Offers", to: '/offers' },
    { id: 4, name: "News", to: '/news' },
    { id: 5, name: "Contact", to: '/contact' },
  ]
  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY >= 100) {
        setGoTop("animate-go-top")
      } else {
        setGoTop("")
      }
      // setShowGoTop(window.scrollY >= 200); // if else
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup funciton
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  classes += goTop



  const handleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <div className={classes} >
      <div className='header-flex'>
        <div className='uppercase font-extrabold text-[30px]'><Link to="/">Travelix</Link></div>
        <aside className='flex gap-10 text-[14px] uppercase font-semibold'>
          {
            navBars.map((nav, index) => {
              return (
                <Link
                  key={index}
                  className='navbar-item line-bottom-hover '
                  to={nav.to}
                  onClick={() => setActive(nav.to)}
                >
                  {nav.name}
                  {
                    active === nav.to ? (
                      <span key={index + 1} className='line-bottom'></span>
                    ) : ""
                  }
                </Link>
              )
            })
          }
        </aside>
        <div className='relative'>
          <VscSearch size={24} className="font-bold hover:text-primary-color transition-all cursor-pointer" onClick={handleSearch} />
          {showSearch && (
            <input className='input-search ' type="text" placeholder='Search...' />
          )}
        </div>
      </div>
    </div>
  )
}

export default HeaderMain