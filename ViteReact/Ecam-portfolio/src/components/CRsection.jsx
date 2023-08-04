import React from "react";
const CRsection = () => {
  return (
    <section className="text-white body-font">
      <div className="container px-5 py-20 mx-auto ">
        <h1 className="text-4xl focus-in-contract md:text-6xl font-semibold text-center mb-6">
          OUR OFFICIAL CRs
        </h1>
        <div className="flex flex-wrap -mx-4 -mb-10 justify-center gap-1 sm:px-8 px-2 sm:gap-6 lg:gap-8 text-center">
          <div className="md:w-3/5 lg:w-2/5 w-full  mb-10 px-4 slide-in-blurred-bottom depth-effect max-h-[700px] glassmorphism-02 py-3 lg:pt-3">
            <div className="rounded-lg h-64 depth-effect  slide-in-blurred-bottom md:h-3/5 overflow-hidden">
              <img
                alt="content"
                className=" object-cover object-top h-full w-full"
                src="./ecam_humans/sanyam.jpeg"
              />
            </div>
            <h2 className="title-font focus-in-contract font-sans text-3xl font-medium text-white mt-6 mb-3">
              Sanyam Gupta
            </h2>
            <p className="leading-relaxed focus-in-contract text-yellow-200 ">
                Official HOD of the east campus no cap !, One of the most trustworthy people one can ever describe | Kuch bhi dikkat ho contact Sanyam 
            </p>
          </div>
          <div className="md:w-3/5 w-full lg:w-2/5  mb-10 px-4 slide-in-blurred-bottom depth-effect max-h-[700px] glassmorphism-02 py-3 lg:pt-3">
            <div className="rounded-lg h-64 depth-effect  slide-in-blurred-bottom md:h-3/5 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-top h-full w-full"
                src="./ecam_humans/shiva.jpeg"
              />
            </div>
            <h2 className="title-font focus-in-contract font-sans text-3xl font-medium text-white mt-6 mb-3 ">
              Shiva Tripathi
            </h2>
            <p className="leading-relaxed focus-in-contract text-yellow-200 text-clip">
              Don't know how the hell he became the CR but dude is pretty good at convincing teachers for the class benefit | File banane ke 250rs charge karega
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRsection;
