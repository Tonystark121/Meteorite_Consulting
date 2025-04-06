import React from "react";

const consultation = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center pt-48 space-y-0">
        <div className="pt-48 pl-24 flex flex-col flex-1">
          <h2 className="text-[80px] lg:text-[100px] font-extrabold text-[#edf4f7] leading-[1.1] tracking-tight ">
            Consultation
          </h2>
          <div className=" font-semibold text-4xl tracking-tight flex flex-col  pl-20">
            <div className="w-full mx-auto">
              <div className=" text-4xl">
                <h2 className="mb-4 leading-snug">
                  Looking for advice uniquely tailored to you?
                </h2>
              </div>
              <div className="flex justify- mt-6 flex-col gap-8">
                <div className="mt-2 text-gray-400 font-light leading-relaxed space-y-12 text-xl animate-textPopup">
                  <p className="py-6">
                    Just send a message, book a video call or request a
                    personalised itinerary.
                  </p>
                  <p>
                    Whether you want to save time, seek peace of mind, or simply
                    want to make your trip extra special, all travel creators
                    are here to assist you every step of the way.
                  </p>
                </div>
                <div className="mt-10 flex flex-row justify-start gap-14">
                  <span className="text-content font-semibold flex items-center text-base xl:text-xl   space-x-3 animate-textPopup gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      className="scale-[85%]"
                    >
                      <path
                        stroke="#323232"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5"
                      />
                      <mask
                        id="Personalized_svg__a"
                        width="18"
                        height="19"
                        x="3"
                        y="2"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: "alpha" }}
                      >
                        <path
                          fill="#fff"
                          d="M12.003 20.283a8.867 8.867 0 1 0 0-17.733 8.867 8.867 0 0 0 0 17.733"
                        />
                      </mask>
                      <g
                        stroke="#323232"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        mask="url(#Personalized_svg__a)"
                      >
                        <path d="M12.001 13.283a3.267 3.267 0 1 0 0-6.533 3.267 3.267 0 0 0 0 6.533M18.652 20.05c-1.634-1.75-4.084-2.917-6.65-2.917s-5.017 1.05-6.65 2.917" />
                      </g>
                    </svg>
                    <span className="text-gray-500 font-bold">
                      Interactive Content
                    </span>
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
                        stroke="#323232"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5M11.766 13.284V5.817M17.482 16.667l-5.716-3.384"
                      />
                    </svg>
                    <span className="text-gray-500 font-bold">
                      Actionable Advice
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" -z-10 w-[45%] px-5">
          <div className="w-full h-full max-h-[120vh]">
            <video
              controls
              poster="/poster-guide.webp"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              className="w-full h-full object-contain pointer-events-none scale-120"
              style={{ visibility: "visible" }}
            >
              <source
                src="https://prod-media-rexby.s3.us-east-2.amazonaws.com/rexby/consult.mp4"
                type="video/mp4"
              />
              <source
                src="https://prod-media-rexby.s3.us-east-2.amazonaws.com/rexby/consult.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default consultation;
