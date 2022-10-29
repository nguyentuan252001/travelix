import HeaderMain from './HeaderMain'
import HeaderNetWork from './HeaderNetWork'

function Header() {



  return (
    <header className='text-white z-[9999] absolute w-full top-0'>
      <HeaderNetWork />
      <HeaderMain />
    </header>
  )
}

export default Header