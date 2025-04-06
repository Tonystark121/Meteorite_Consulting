import React from "react";

const Tours = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center pt-48 space-y-0">
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
                src="https://prod-media-rexby.s3.us-east-2.amazonaws.com/rexby/tour.mp4"
                type="video/mp4"
              />
              <source
                src="https://prod-media-rexby.s3.us-east-2.amazonaws.com/rexby/tour.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
        <div className="pt-48 flex flex-col flex-1">
          <h2 className="text-[80px] lg:text-[100px] font-extrabold text-[#edf4f7] leading-[1.1] tracking-tight">
            Private Tours
          </h2>
          <div className="font-semibold text-4xl tracking-tight flex flex-col items-center w-full">
            <div className="w-[78%] mx-auto">
              <div className=" text-4xl">
                <h2 className="mb-4 leading-snug">
                  Want to experience the perfect day?
                </h2>
              </div>
              <div className="flex justify-end mt-6 flex-col gap-8">
                <div className="mt-2 text-gray-400 font-light leading-relaxed space-y-12 text-xl animate-textPopup">
                  <p className="py-6">
                    Select a tour, date and time that best suits you and explore
                    the destination with someone who truly loves and knows it.
                  </p>
                  <p>
                    You'll have the opportunity to ask questions, engage in
                    discussions, and explore the destinations you're visiting in
                    a personal setting.
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
                        d="M12 22.5C6.167 22.5 1.5 17.833 1.5 12 1.5 6.283 6.167 1.5 12 1.5M12 1.5c5.717 0 10.5 4.783 10.5 10.5 0 5.833-4.783 10.5-10.5 10.5"
                      />
                      <path
                        stroke="#323232"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m14.682 14.567-5.367-5.25 7.35-1.984-1.866 7.233-7.467 2.1 1.983-7.35"
                      />
                    </svg>

                    <span className="text-gray-500 font-bold">Guided Tour</span>
                  </span>
                  <span className="text-content font-semibold flex items-center text-base xl:text-xl   space-x-3 animate-textPopup gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="26"
                      fill="none"
                      className="scale-[85%]"
                    >
                      <path
                        stroke="#323232"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m13.996 14.983 2.1 1.05c.35.234.817-.116.817-.583l-.35-2.333 1.633-1.634c.35-.35.117-.816-.35-.933l-2.333-.35-1.05-2.1c-.233-.35-.817-.35-.933 0l-1.05 2.1-2.334.35c-.466.117-.583.583-.35.933l1.634 1.634-.35 2.333c-.117.467.35.817.816.583z"
                      />
                      <path
                        fill="#323232"
                        d="M10.61 21.4c-.116 1.284-.933 2.217-2.333 2.334.117-1.4 1.05-2.217 2.334-2.334m0-1.75q-.174 0 0 0c-2.333.117-3.85 1.75-4.083 3.85 0 .467.117 1.05.467 1.4s.817.467 1.283.467h.117c2.217-.117 3.733-1.75 3.967-3.85 0-.467-.117-1.05-.467-1.4s-.817-.467-1.283-.467M4.313 16.733c.583 0 1.167.234 1.633.584-.466.466-1.05.7-1.633.7s-1.167-.233-1.633-.584c.583-.466 1.166-.7 1.633-.7m0-1.75q-1.575 0-2.8 1.05c-.35.35-.583.817-.583 1.284 0 .466.233.933.583 1.283q1.225 1.05 2.8 1.05t2.8-1.05c.35-.35.583-.817.583-1.283 0-.467-.233-.933-.583-1.283-.817-.584-1.75-1.05-2.8-1.05M2.328 8.8c1.283.117 2.217 1.05 2.333 2.334-1.283 0-2.216-.934-2.333-2.334m0-1.75c-.467 0-.933.234-1.167.467-.35.35-.583.816-.583 1.4.117 2.217 1.633 3.85 3.85 3.967h.117c.466 0 .933-.234 1.166-.467.35-.35.584-.817.584-1.4C6.178 8.8 4.66 7.167 2.445 7.05zM7.343 2.267c.933 1.05.933 2.333 0 3.383-.817-1.05-.817-2.45 0-3.383m0-1.75c-.467 0-.934.233-1.284.583-1.516 1.75-1.516 3.967 0 5.717.35.35.817.583 1.284.583.466 0 .933-.233 1.283-.583 1.517-1.633 1.517-3.967 0-5.717-.233-.35-.7-.583-1.283-.583M17.5 21.4c1.282.117 2.216.934 2.332 2.334-1.4-.117-2.216-1.05-2.333-2.334m0-1.75c-.468 0-.934.234-1.284.467-.35.35-.584.817-.467 1.4.117 2.217 1.75 3.733 3.967 3.85h.116c.467 0 .934-.233 1.284-.467.35-.35.583-.816.466-1.4-.233-2.216-1.75-3.733-4.083-3.85M23.68 16.733c.584 0 1.167.234 1.634.7-.467.467-1.05.584-1.634.584a2.3 2.3 0 0 1-1.633-.7c.583-.35 1.05-.584 1.633-.584m0-1.75q-1.575 0-2.8 1.05c-.35.35-.583.817-.583 1.284 0 .466.233.933.583 1.283q1.225 1.05 2.8 1.05t2.8-1.05c.35-.35.584-.817.584-1.283 0-.467-.234-.933-.584-1.283-.817-.584-1.75-1.05-2.8-1.05M25.666 8.8c-.117 1.284-.933 2.217-2.333 2.334.116-1.284 1.05-2.217 2.333-2.334m0-1.75h-.117c-2.216.234-3.733 1.75-3.85 3.967 0 .466.117 1.05.584 1.4.35.35.816.467 1.166.467h.117c2.217-.234 3.733-1.75 3.85-3.967 0-.467-.117-1.05-.583-1.4-.234-.233-.7-.467-1.167-.467M20.651 2.267c.934 1.05.934 2.333 0 3.383-.816-1.05-.816-2.333 0-3.383m0-1.75c-.466 0-.933.233-1.283.583-1.517 1.75-1.517 3.967 0 5.717.35.35.817.583 1.283.583.467 0 .934-.233 1.284-.583 1.516-1.75 1.516-3.967 0-5.717-.234-.35-.7-.583-1.284-.583"
                      />
                    </svg>

                    <span className="text-gray-500 font-bold">
                      Unique Experience
                    </span>
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

export default Tours;
