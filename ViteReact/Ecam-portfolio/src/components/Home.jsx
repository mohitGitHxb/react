import React from 'react'
import Dropdown from './Dropdown';

const Home = () => {
  return (
<section className="text-gray-400 bg-zinc-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col md:justify-center items-center">
    <div className=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl lg:text-6xl text-3xl mb-4 font-bold text-white">ECAM Resources
      </h1>
      <p className="mb-8 leading-relaxed">One Stop Solution For All subjects <span className='font-bold text-md md:text-lg text-white'>Have a look maybe?</span></p>
      <div className="flex justify-center">
        <Dropdown/>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>
  );
}

export default Home
