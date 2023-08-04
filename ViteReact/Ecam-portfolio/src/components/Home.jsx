import React, { useContext, useEffect, useState } from "react";
import MainContents from "./MainContents";
import SemDropdown from "./SemDropdown";
import AuthContext from "./store/store";

const Home = () => {
  const storeCtx = useContext(AuthContext);
  const [showLinks, setShowLinks] = useState(false);
  useEffect(() => {
    setShowLinks(storeCtx.isCourseSelected);
  }, [storeCtx.isCourseSelected]);
  const [Animation, SetAnimation] = useState(true);
  const toggleAnimation = () => {
    SetAnimation(!Animation);
  };
  return (
    <section
      onScroll={toggleAnimation}
      className={`text-gray-400 ${
        Animation ? "slide-in-blurred-bottom" : "slide-out-blurred-top"
      }  body-font`}
    >
      <div className="container md:flex-[2] mx-auto  flex px-5 py-24 md:flex-row flex-col md:justify-center items-center">
        <div className=" md:w-3/4 flex flex-col md:items-center mb-24 md:mb-0 items-center text-center">
          <h1 className="title-font focus-in-contract sm:text-5xl lg:text-8xl text-3xl mb-4 font-bold text-white">
            ECAM Resources
          </h1>
          <p className="mb-8 focus-in-contract leading-relaxed font-semibold text-md md:text-2xl max-w-3xl bg-gradient-to-b from-neutral-50 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
            Your Ultimate Destination for ECAM Studies! Explore our
            Comprehensive Collection of Study Materials for All Subjects. Don't
            Miss Out, Take a Peek Inside!
          </p>
          <div className="flex justify-center">
            <SemDropdown />
          </div>
          {showLinks && (
            <div className="w-full flex justify-center">
              <MainContents />
            </div>
          )}
        </div>

        {/* <div className="lg:max-w-lg lg:w-full mt-6 md:mt-0 md:w-1/2 w-4/6 rotate-center rounded">
          <img
            className="object-cover filter brightness-[400] contrast-200  object-center rounded"
            alt="hero"
            src={`./nsuticon.png`}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Home;
