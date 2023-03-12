import { Carousel } from "flowbite-react";
import React from "react";

const DevsCarsouel = () => {
  return (
    <div className="h-56 my-10 md:h-[240px]  sm:h-64 w-full sm:w-4/5 md:2/3 lg:h-[280px] xl:h-[400px] 2xl:h-[600px] mx-auto px-4  sm:px-8 md:px-10">
      <Carousel slide={true} slideInterval={3000}>
        <div className="flex h-full items-center justify-center depth-effect glassmorphism-01 dark:text-white">
          <img
            src="./LordSanyam.jpeg"
            className="object-center object-contain "
          />
        </div>
        <div className="flex h-full items-center justify-center depth-effect glassmorphism-01 dark:text-white">
          <img
            src="./LordSanyam.jpeg"
            className="object-center object-contain"
          />
        </div>
        <div className="flex h-full items-center justify-center depth-effect glassmorphism-01 dark:text-white">
          <img
            src="./LordSanyam.jpeg"
            className="object-center object-contain"
          />
        </div>
      </Carousel>
      {/* <h1 className='text-[100px] font-mono text-yellow-50 text-center align-middle'>ERROR 404</h1> */}
    </div>
  );
};

export default DevsCarsouel;
