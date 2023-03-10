import React from "react";
import { FaInstagram } from "react-icons/fa";
import pic from '../assets/photos/2021UEA6621.jpeg'
const CRsection = () => {
  return (
    <section class="text-white body-font">
      <div class="container px-5 py-20 mx-auto">
        <h1 className="text-4xl focus-in-contract md:text-6xl font-semibold text-center mb-6">
          OUR OFFICIAL CRs
        </h1>
        <div class="flex flex-wrap -mx-4 -mb-10 justify-center text-center">
          <div class="sm:w-2/5 mb-10 px-4">
            <div  class="rounded-lg slide-in-blurred-bottom  h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1201x501"
              />
            </div>
            <h2 class="title-font focus-in-contract font-sans text-3xl font-medium text-white mt-6 mb-3">
              Sanyam Gupta
            </h2>
            <p class="leading-relaxed  focus-in-contract text-yellow-200 ">
             HOD
            </p>
          </div>
          <div class="sm:w-2/5 mb-10 px-4">
            <div class="rounded-lg h-64 slide-in-blurred-bottom  overflow-hidden">
              <img
                alt="content"
                class="object-contain object-center h-full w-full"
                src={pic}
              />
            </div>
            <h2 class="title-font focus-in-contract font-sans text-3xl font-medium text-white mt-6 mb-3">
              Shiva Tripathi
            </h2>
            <p class="leading-relaxed focus-in-contract text-yellow-200 ">
              | 2021UEA6621
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CRsection;
