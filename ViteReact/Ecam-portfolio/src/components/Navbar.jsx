import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  let active = 'mr-5 text-yellow-300 hover:underline transition-all duration-200 cursor-pointer'
  let inactive = 'mr-5 hover:text-yellow-300 hover:underline transition-all duration-200 cursor-pointer'
  return (
    <>
        <header className="text-white  body-font">
  <div className="container mx-auto md:justify-around flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex  title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src='./nsuticon.png' className='object-contain w-14 md:w-16 filter
       brightness-[400] rounded' />
      <span className="ml-3 font-semibold bg-gradient-to-br from-yellow-200 to-yellow-100 text-transparent bg-clip-text text-2xl">ECAM</span>
    </a>
    <nav className=" flex flex-wrap items-center text-base justify-center">
      <NavLink to={'/'} className={({ isActive }) => (isActive ? active : inactive)} >Home</NavLink>
      <NavLink to={'/batch-2025'}  className={({ isActive }) => (isActive ? active : inactive)} >Batch - 2025</NavLink>
      <NavLink to={'/devs'}  className={({ isActive }) => (isActive ? active : inactive)} >DEVS</NavLink>
    </nav>
  </div>
</header>
    </>
  )
}

export default Navbar