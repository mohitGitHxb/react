import React, { useState } from 'react'
import humansOfEcam from '../assets/humansOfEcam';

const Allstudents = () => {
  const[students,setStudents] = useState(humansOfEcam);
  return (
    
    <>
    <section className="mt-4 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className='mb-12 md:mb-20'><h1 className='text-4xl md:text-5xl font-semibold text-white text-center'>| Batch - 2025</h1></div>
    <div className="flex flex-wrap px-2 md:px-5 -m-4 justify-center md:justify-start">

    {
      students.map((ele)=>{
        return (
      <div className="p-4 lg:w-1/2" key={ele.id}>
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font focus-in-contract font-medium text-lg text-white">{ele.name}</h2>
          <h3 className="text-slate-300 mb-3">{ele.id}</h3>
          <p className="mb-4 focus-in-contract break-words w-4/5">{ele.description}</p>
        </div>
      </div>
    </div>
        )
      })
    }

    </div>
  </div>
</section>
    </>
  )
}

export default Allstudents