import React from "react";
const CRsection = () => {
  return (
    <section className="text-white body-font">
      <div className="container px-5 py-20 mx-auto ">
        <h1 className="text-4xl focus-in-contract md:text-6xl font-semibold text-center mb-6">
          OUR OFFICIAL CRs
        </h1>
        <div className="flex flex-wrap -mx-4 -mb-10 justify-center gap-1 sm:gap-4 text-center">
          <div className="md:w-2/6 mb-10 slide-in-blurred-bottom px-4 depth-effect glassmorphism-01 py-3">
            <div  className="rounded-lg slide-in-blurred-bottom  depth-effect h-64 overflow-hidden">
              <img
                alt="content"
                className=" object-cover h-auto w-full "
                src="./LordSanyam.jpeg"
              />
            </div>
            <h2 className="title-font focus-in-contract font-sans text-3xl font-medium text-white mt-6 mb-3">
              Sanyam Gupta
            </h2>
            <p className="leading-relaxed  focus-in-contract text-yellow-200 ">
             HOD
            </p>
          </div>
          <div className="sm:w-2/6  mb-10 px-4 slide-in-blurred-bottom depth-effect glassmorphism-01 py-3">
            <div className="rounded-lg h-64 depth-effect  slide-in-blurred-bottom  overflow-hidden">
              <img
                alt="content"
                className="object-contain rounded-full object-center h-full w-full"
                src='./2021UEA6621.jpeg'
              />
            </div>
            <h2 className="title-font focus-in-contract font-sans text-3xl font-medium text-white mt-6 mb-3 ">
              Shiva Tripathi
            </h2>
            <p className="leading-relaxed focus-in-contract text-yellow-200 ">
              | 2021UEA6621
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CRsection;
