import React, { useState } from "react";
import humansOfEcam from "../assets/humansOfEcam";

const Allstudents = () => {
  const [students, setStudents] = useState(humansOfEcam.sort((a,b)=>a.id > b.id ));
  return (
    <>
      <section className="mt-4 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-12 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-semibold text-white text-center">
              | Batch - 2025
            </h1>
          </div>
          <div className="flex flex-wrap px-2 md:px-5 -m-4 justify-center md:justify-evenly ">
            {students.map((ele) => {
              return (
                <div
                  className="p-4 md:m-4 m-3 lg:w-2/5 w-4/5 glassmorphism-03 depth-effect slide-in-blurred-bottom"
                  key={ele.id}
                >
                  <div className="h-full flex sm:flex-row  flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt={`${ele.name}`}
                      className="flex-shrink-0 depth-effect rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                      src={ele.imgurl}
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font focus-in-contract text-glow-cyan font-semibold text-lg text-white">
                        {ele.name}
                      </h2>
                      <h3 className="text-slate-300 mb-3">{ele.id}</h3>
                      <p className="mb-4 focus-in-contract text-white break-words text-center lg:text-left w-full md:w-4/5">
                        {ele.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Allstudents;
