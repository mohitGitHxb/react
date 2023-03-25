import { Carousel } from "flowbite-react";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import developersOfEcam from "../assets/DevelopersOfEcam";
const DevsCarsouel = () => {
  const [show, setShow] = useState(false);
  let hiddenCls =
    "absolute  bg-black bg-opacity-70 z-10 w-full h-1/2 bottom-0 flex-col justify-evenly items-center py-5 slide-out-left hidden transition-all duration-700";
  let flexCls =
    "absolute flex bg-black bg-opacity-70 z-10 w-full h-1/2 bottom-0 flex-col justify-evenly items-center py-5 slide-in-right";
  const displayHandler = () => {
    setShow(!show);
  };
  const onMouseEnterHandler = () => {
    setShow(true);
  };
  const onMouseLeaveHandler = () => {
    setShow(false);
  };
  return (
    <div className="h-60 sm:h-[270px] md:h-[500px]  w-full lg:w-[60%] sm:w-4/5 lg:h-[280px] xl:h-[500px] 2xl:h-[600px] mx-auto my-auto lg:my-10 px-4 sm:px-8">
      <Carousel slide={!show} slideInterval={3000} className='depth-effect rounded-lg'>
        {developersOfEcam.map((e, index) => {
          return (
            <div
              key={`${index}`}
              onMouseLeave={onMouseLeaveHandler}
              onMouseEnter={onMouseEnterHandler}
              onClick={displayHandler}
              className="flex h-full relative items-center rounded-md justify-center  tint-effect glassmorphism-01 dark:text-white"
            >
              <img
                src={`${e.imgUrl}`}
                className="object-top object-cover w-full h-full max-h-[650px]"
              />
              <div className={`${show ? flexCls : hiddenCls}`}>
                <div className="flex flex-row w-full lg:w-4/5 justify-evenly items-center">
                  <a
                    href={e.githubUrl}
                    target="_blank"
                    className="flex flex-row items-center cursor-pointer "
                  >
                    <BsGithub className="sm:h-10 h-8 w-8 sm:w-10 lg:h-14 lg:w-14 md:mr-6 mr-3 text-white hover:text-green-400 mb-2" />
                    <h4 className="text-white text-lg md:text-3xl  hover:text-green-400">Github</h4>
                  </a>
                  <a
                    href={e.instaUrl}
                    target="_blank"
                    className="flex flex-row  items-center cursor-pointer"
                  >
                    <BsInstagram className="sm:h-10 h-8 w-8 sm:w-10 lg:h-14 lg:w-14 md:mr-6 mr-3 text-white hover:text-purple-400" />
                    <h4 className="text-white text-lg md:text-3xl  hover:text-purple-400">
                      Instagram
                    </h4>
                  </a>
                </div>
                <h3 className="text-2xl uppercase sm:text-3xl lg:text-5xl text-glow-red text-red-300 font-bold shadow-xl tracking-normal leading-6">
                  {e.username}
                </h3>
              </div>
            </div>
          );
        })}
         <div
              onMouseLeave={onMouseLeaveHandler}
              onMouseEnter={onMouseEnterHandler}
              onClick={displayHandler}
              className="flex h-full relative items-center rounded-md justify-center  tint-effect glassmorphism-01 dark:text-white"
            >
              <img
                src={`./ecam_humans/pi.jpg`}
                className="object-top object-cover w-full h-full max-h-[650px]"
              />
              <div className={`${show ? flexCls : hiddenCls}`}>
                <div className="flex flex-row w-full lg:w-4/5 justify-evenly items-center">
                  <a
                    href={'https://github.com/Abhishek2533'}
                    target="_blank"
                    className="flex flex-row items-center cursor-pointer "
                  >
                    <BsGithub className="sm:h-10 h-8 w-8 sm:w-10 lg:h-14 lg:w-14 md:mr-6 mr-3 text-white hover:text-green-400 mb-2" />
                    <h4 className="text-white text-lg md:text-3xl  hover:text-green-400">Github</h4>
                  </a>
                  <a
                    href={'https://www.instagram.com/abhi_pi_0/'}
                    target="_blank"
                    className="flex flex-row  items-center cursor-pointer"
                  >
                    <BsInstagram className="sm:h-10 h-8 w-8 sm:w-10 lg:h-14 lg:w-14 md:mr-6 mr-3 text-white hover:text-purple-400" />
                    <h4 className="text-white text-lg md:text-3xl  hover:text-purple-400">
                      Instagram
                    </h4>
                  </a>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-5xl text-glow-red text-red-300 font-bold shadow-xl tracking-normal leading-6">π
                  
                </h3>
              </div>
            </div>
      </Carousel>
      {/* <h1 className='text-[100px] font-mono text-yellow-50 text-center align-middle'>ERROR 404</h1> */}
    </div>
  );
};

export default DevsCarsouel;
