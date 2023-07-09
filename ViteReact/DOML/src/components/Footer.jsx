import React from 'react'

const Footer = () => {
  return (
    <section className="w-11/12 sm:w-3/4 mx-auto my-12 md:my-24">
        <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 min-h-[2px] w-100 my-3" />
        <div className='flex flex-row flex-wrap justify-center md:justify-between items-center' >
        <h3 className='font-medium text-gray-300 text-center   cursor-pointer'>Copyright © 2022 DOML. All rights reserved.</h3>
        <h3 className='font-medium text-gray-300 text-center mt-3 md:mt-0  cursor-pointer'>Terms of Use & Privacy Policy</h3>
        </div>
    </section>
  )
}

export default Footer
