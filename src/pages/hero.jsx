import React from "react";
import Button from "../components/button";
import HeroImage from '../../public/heroImage.png'
import background from '../../public/background.png'

const hero = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 ">
        <div class="flex flex-col justify-center md:w-[58%] pt-0 px-8 pr-0 order-2 md:order-1 py-6 md:py-0">
          <h1 className="text-rexbygray-800 text-3xl lg:text-6xl font-semibold leading-snug lg:leading-snug">
            Get Travel Advice
            <br />
            from Travel Creators
          </h1>
          <div className="text-gray-400 text-[16px] lg:text-[18px] font-light leading-relaxed text-base py-4 lg:py-8">
            Planning your trip through social media? Now, easily access travel
            advice and tours created by the world's best travel content creators
          </div>
          <div className="flex flex-row items-center lg:gap-24 gap-12 ">
            <Button />
            <a
              href="https://rexby.typeform.com/to/hK7tfdj9"
              className=" font-poppins focus:outline-none tracking-wider pointer-events-auto  font-semibold text-title underline"
            >
              <div className="flex flex-1 justify-center truncate text-[14px] lg:text-[16px]">
                Become a travel creator
              </div>
            </a>
          </div>
        </div>
        <div className="lg:pr-6 lg:w-full md:w-[85%] order-1 md:order-2  w-full pt-4 md:pt-0" >
            <img src={HeroImage} alt="Hero" className="hidden md:block" />
            <img src={background} alt="" className="w-full object-cover" />
        </div>
      </div>


    </>
  );
};

export default hero;
