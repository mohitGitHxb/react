import React from 'react'
import {brands} from '../constants/brands'
const Brands = () => {
  return (
    <section className="w-3/4 mx-auto my-32">
      <div className='flex flex-row max-h-[350px] overflow-hidden flex-wrap justify-center items-center gap-20 md:gap-24 '>
          {
            brands && brands.map((brand) => {
              return <img src={brand.imgUrl} key={brand.id} alt={brand.alt} className='max-h-11 h-2/4'/>
            })
          }
      </div>
        <h3 className='font-medium text-gray-300 text-center  mt-14 md:mt-28 '>Trusted by the world’s most ambitious teams.</h3>
    </section>
  )
}

export default Brands
