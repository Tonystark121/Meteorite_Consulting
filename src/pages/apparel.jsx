import React from "react";
import Button from "../components/button";
import Card from "../components/card";

const apparel = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  return (
    <div className=" pt-32 md:pt-[270px] pb-[140px] flex flex-col gap-6 m-auto">
      <h2 className="text-center text-gray-800 leading-normal sm:leading-normal text-3xl md:text-5xl md:leading-normal font-semibold pb-2">
        Creators are the next-gen <br /> travel advisors and operators
      </h2>

      <div className=" w-full overflow-hidden">
        <div className=" w-full flex flex-col animate-scroll gap-8 py-2">
          <div className="flex gap-4 md:gap-3">
            {arr.map((index) => (
              <Card key={index} />
            ))}
          </div>
          <div className="flex gap-3">
            {arr.map((index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 font-light text-[15px] md:text-xl mx-auto mt-2 leading-relaxed">
        Planning your trip through social media? Now, easily access travel
        advice <br />
        and tours created by the world's best travel content creators
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24 pt-5 justify-center">
        <Button />
        <a
          href="https://rexby.typeform.com/to/hK7tfdj9"
          className=" font-poppins focus:outline-none tracking-wider pointer-events-auto  font-semibold text-[14px] md:text-title underline"
        >
          <div className="flex flex-1 justify-center truncate">
            Become a travel creator
          </div>
        </a>
      </div>
    </div>
  );
};

export default apparel;
