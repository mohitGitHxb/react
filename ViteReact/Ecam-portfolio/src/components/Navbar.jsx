import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {BsBrightnessLowFill ,BsBrightnessLow} from 'react-icons/bs'
const Navbar = () => {
  const[theme,setTheme] = useState(false);
  const toggleTheme = ()=>{
    if(!theme){
      document.body.classList.remove('normalTheme');
      document.body.classList.add('bg-zinc-900');
    }
    else{
      document.body.classList.remove('bg-zinc-900');
      document.body.classList.add('normalTheme');
    }
    setTheme(!theme);
  }
  let active =
    "mr-5 text-yellow-300 hover:underline transition-all duration-200 cursor-pointer";
  let inactive =
    "mr-5 hover:text-yellow-300 hover:underline transition-all duration-200 cursor-pointer";
  return (
    <>
      <header className="text-white  body-font">
        <div className="container mx-auto md:justify-between flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex  title-font font-medium items-center text-white mb-4 md:mb-0">
            <img
              src="./nsuticon.png"
              className="object-contain w-14 md:w-16 filter
       brightness-[400] rounded"
            />
            <span className="ml-3 font-bold text-white md:text-3xl text-xl">
              <NavLink className="title-font" to="/">
                ECAM
              </NavLink>
            </span>
          </a>
          <nav className=" flex flex-wrap font-semibold items-center md:text-[24px] text-[15px] navbar-links justify-center">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/batch-2025"}
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              Batch - 2025
            </NavLink>
            <NavLink
              to={"/devs"}
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              DEVS
            </NavLink>
           {!theme ? <BsBrightnessLowFill onClick={toggleTheme} className="text-2xl cursor-pointer"/>
           : <BsBrightnessLow onClick={toggleTheme} className='text-2xl cursor-pointer'/>}
          </nav>
        </div>
      </header>
      
    </>
  );
};

export default Navbar;
