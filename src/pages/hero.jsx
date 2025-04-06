import React from "react";
import Button from "../components/button";
import HeroImage from '../../public/heroImage.png'

const hero = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between gap-3 ">
        <div class="flex flex-col justify-center w-[58%] pt-0 px-8 pr-0 ">
          <h1 className="text-rexbygray-800 text-3xl lg:text-6xl font-semibold leading-snug lg:leading-snug">
            Get Travel Advice
            <br />
            from Travel Creators
          </h1>
          <div className="text-gray-400 text-[18px] font-light leading-relaxed text-base py-8">
            Planning your trip through social media? Now, easily access travel
            advice and tours created by the world's best travel content creators
          </div>
          <div className="flex flex-row items-center gap-24 ">
            <Button className="" />
            <a
              href="https://rexby.typeform.com/to/hK7tfdj9"
              className=" font-poppins focus:outline-none tracking-wider pointer-events-auto  font-semibold text-title underline"
            >
              <div className="flex flex-1 justify-center truncate">
                Become a travel creator
              </div>
            </a>
          </div>
        </div>
        <div className="pr-6">
            <img src={HeroImage} alt="Hero" width={'504px'} height={'662px'} />
        </div>
      </div>
    </>
  );
};

export default hero;
