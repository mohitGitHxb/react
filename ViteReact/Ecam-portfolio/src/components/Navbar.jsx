import React from 'react'

const Navbar = () => {
  return (
    <>
        <header className="text-white  body-font">
  <div className="container mx-auto md:justify-around flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">E<span className='font-bold'>S</span>CAM</span>
    </a>
    <nav className=" flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-yellow-300 hover:underline transition-all duration-200 cursor-pointer">Home</a>
      <a className="mr-5 hover:text-yellow-300 hover:underline transition-all duration-200 cursor-pointer">Batch - 2025</a>
      <a className="mr-5 hover:text-yellow-300 hover:underline transition-all duration-200 cursor-pointer">DEVS</a>
    </nav>
    <button className="inline-flex items-center bg-zinc-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </>
  )
}

export default Navbar