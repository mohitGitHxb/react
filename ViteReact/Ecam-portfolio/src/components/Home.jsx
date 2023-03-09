import React, { useContext, useEffect, useState } from 'react'
import Dropdown from './Dropdown';
import MainContents from './MainContents';
import AuthContext from './store/store';


const Home = () => {
  const storeCtx = useContext(AuthContext);
  const[showLinks,setShowLinks] = useState(false);
  useEffect(()=>{
    setShowLinks(storeCtx.isCourseSelected);
  },[storeCtx.isCourseSelected])
  const [Animation, SetAnimation] = useState(true);
  const toggleAnimation = ()=>{
    SetAnimation(!Animation);
  }
  return (
<section onScroll={toggleAnimation} className={`text-gray-400 ${Animation ? 'slide-in-blurred-bottom':'slide-out-blurred-top'}  body-font`}>
  <div className="container md:flex-[2] mx-auto flex px-5 py-24 md:flex-row flex-col md:justify-center items-center">
    <div className=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-24 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl lg:text-6xl text-3xl mb-4 font-bold text-white">ECAM Resources
      </h1>
      <p className="mb-8 leading-relaxed">One Stop Solution For All subjects <span className='font-bold text-md md:text-lg text-white'>Have a look maybe?</span></p>
      <div className="flex justify-center">
        <Dropdown/>
      </div>
     { 
     showLinks &&
     <div className="w-full flex justify-center">
        <MainContents/>
  </div>}
    </div>

    <div className="lg:max-w-lg lg:w-full mt-6 md:mt-0 md:w-1/2 w-4/6 rotate-center rounded">
      <img className="object-cover filter brightness-[400] contrast-200  object-center rounded" alt="hero" src={`./nsuticon.png`}/>
    </div>
  </div>
</section>
  );
}

export default Home
