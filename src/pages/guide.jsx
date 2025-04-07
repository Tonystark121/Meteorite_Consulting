import React from "react";

const Guide = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center pt-20 md:pt-48 space-y-0 ">
        <div className="md:-z-10 md:w-[45%] px-5">
          <div className=" w-full h-full max-h-[120vh]">
            <video
              controls
              poster="/poster-guide.webp"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              className="w-full h-full object-contain pointer-events-none scale:110 md:scale-120"
              style={{ visibility: "visible" }}
            >
              <source
                src="https://prod-media-rexby.s3.us-east-2.amazonaws.com/rexby/guide.mp4"
                type="video/mp4"
              />
              <source
                src="https://prod-media-rexby.s3.us-east-2.amazonaws.com/rexby/guide.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
        <div className=" pt-32 md:pt-48 flex flex-col flex-1">
          <h2 className="text-[50px] lg:text-[100px] font-extrabold text-[#edf4f7] leading-[1.1] tracking-tight">
            Travel Guides
          </h2>
          <div className="font-semibold text-4xl tracking-tight flex flex-col items-center w-full">
            <div className=" w-[90%] md:w-[78%] mx-auto">
              <div className=" text-2xl md:text-4xl">
                <h2 className="mb-4 leading-snug">
                  Unlock insider secrets from local creators
                </h2>
              </div>
              <div className="flex justify-end mt-6 flex-col gap-8">
                <div className="mt-2 text-gray-400 font-light leading-relaxed  lg:space-y-12  text-[16px] md:text-xl animate-textPopup">
                  <p className="py-6">
                    Get access to a curated list of all the best sightseeing
                    spots, tours, accommodation, car rentals and more recs that
                    make your trip unforgettable.
                  </p>
                  <p>
                    Presented in an interactive guide featuring a visually
                    appealing map, pre-designed itineraries, and helpful travel
                    tips to guide your journey like no other.
                  </p>
                </div>
                <div className="mt-10 flex flex-row justify-start gap-14">
                  <span className="text-content font-semibold flex items-center text-base xl:text-xl   space-x-3 animate-textPopup gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="24"
                      fill="none"
                      className="scale-[85%]"
                    >
                      <path
                        stroke="#14142B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M22.336 22.5H3.669a2.34 2.34 0 0 1-2.333-2.333V3.833A2.34 2.34 0 0 1 3.669 1.5h18.667a2.34 2.34 0 0 1 2.333 2.333v16.334a2.34 2.34 0 0 1-2.333 2.333"
                      ></path>
                      <path
                        stroke="#14142B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M8.333 10.833a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667M24.672 16.667l-4.9-3.967c-.467-.35-1.284-.35-1.634.234l-3.85 4.9c-.35.466-1.166.583-1.633.233l-2.216-1.75a1.25 1.25 0 0 0-1.634.117L3.672 22.5"
                      ></path>
                    </svg>
                    <span className="text-gray-500 font-bold">Interactive Content</span>
                  </span>
                  <span className="text-content font-semibold flex items-center text-base xl:text-xl   space-x-3 animate-textPopup gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      className="scale-[85%]"
                    >
                      <path
                        stroke="#14142B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 12v5.833m0 4.667C6.167 22.5 1.5 17.833 1.5 12S6.167 1.5 12 1.5 22.5 6.167 22.5 12 17.833 22.5 12 22.5"
                      ></path>
                      <circle
                        cx="11.885"
                        cy="8.5"
                        r="1.167"
                        fill="#323232"
                      ></circle>
                    </svg>
                    <span className="text-gray-500 font-bold">Actionable Advice</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;
