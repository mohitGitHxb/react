import React from "react";
import Slider from "react-slick";
import { members } from "../constants/dummyData";
const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots:dots => <ul className="bg-white list z-10 text-white list-disc" >{dots}</ul>

  };
  return (
    <section className="md:w-3/4 w-11/12 mx-auto my-12 md:my-24">
      <Slider {...settings} arrows dots >
        {members &&
          members.map((member) => {
            return (
              <div key={member.id}>
                <div className="bg-gradient-to-r relative from-fuchsia-500 to-cyan-500 h-full w-full rounded-lg flex flex-col lg:flex-row justify-center md:justify-evenly items-center md:py-7 lg:py-24 py-4 px-2 md:px-10">
                  <img
                    src={member.imgUrl}
                    className="w-[257px] h-[257px] "
                  />
                  <div className="min-h-full py-4 lg:pt-0 lg:pb-4 flex flex-col items-center lg:items-start justify-between  max-w-screen-sm">
                    <p className="font-semibold text-center lg:text-left text-base text-white md:text-xl lg:mb-4">
                     {member.description}
                    </p>
                    <h3 className="font-bold text-white text-xl md:text-2xl  lg:mb-4">
                      {member.name}
                    </h3>
                    <h3 className="font-medium text-white text-lg md:text-xl  lg:mb-4">
                      {member.position}
                    </h3>
                    <a href={member.discord} target="_blank" className="cursor-pointer">
                      <img src="./discord.png" alt="discord" className="h-9" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </section>
  );
};

export default Testimonials;
