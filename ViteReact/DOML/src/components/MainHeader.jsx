import React from "react";

const MainHeader = () => {
  return (
    <section className="w-3/4 mx-auto my-12 md:my-24">
      <div className="flex flex-col-reverse md:flex-row justify-evenly items-center">
        <div className="flex flex-col h-full max-w-[715px] my-5 md:my-0">
          <h1 className="md:text-7xl py-4 text-5xl colored mb-4 font-medium text-center md:text-left">AI Marketing.</h1>
          <h1 className="md:text-7xl text-5xl font-medium mb-10 text-center md:text-left text-white">
            Optimized Reach
          </h1>
          <p className="md:text-2xl text-xl text-gray-400 text-center md:text-left">
            Our vision is to revolutionize the way brands and advertisers
            target, reach
          </p>
          <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 min-h-[2px] w-100 my-10" />
        <button
          type="button"
          className="inline-flex border-gradient lg:w-2/5 md:w-2/3 items-center justify-center hover:justify-evenly h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle bg-transparent rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
        >
          <p className="hover:colored">Get Started</p>
          <span><img src="./arrow_r.png" alt="arrow_r.png" className="w-8 h-7 ml-5" ></img></span>
        </button>
        </div>
        <div className="self-center">
          <img
            src="./earth.png"
            alt="earth.png"
            className="h-[283px] w-[295px] wobble-hor-bottom md:h-auto md:w-auto"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
