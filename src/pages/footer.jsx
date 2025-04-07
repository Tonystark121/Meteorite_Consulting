import React from "react";
import backed from "../../public/backed.png";
import navbarImage from '../../public/navbar.png'

const footer = () => {
  return (
    <div className=" bg-[#F9F9F9] flex flex-row items-center justify-center w-full px-4 py-16 md:py-36 md:px-24 mt-48">
      <div className="flex flex-col  md:gap-14 lg:flex-row justify-between w-full">
        <div className="flex flex-col justify-start gap-0 md:gap-6">
          <img src={navbarImage} alt="" width={120} height={100} />
          <p className="text-gray-400 my-8 leading-relaxed text-sm w-full md:w-96">
            Rexby was founded in 2021 with the mission of enabling travel
            content creators to provide a better service and capture more of the
            immense value they are creating for the tourism industry
          </p>
          <div className="text-gray-400 text-xl flex flex-row gap-8 md:gap-4 tracking-wide pt-4">
            <p>Backed by</p>
            <img
              src={backed}
              alt=""
              className="w-[104px] h-[23px] text-gray-400"
            />
            <img
              src={backed}
              alt=""
              className="w-[104px] h-[23px] text-gray-400"
            />
          </div>
        </div>
        <div className=" pt-16 md:pt-0 flex sm:flex-row flex-wrap gap-12 sm:gap-24">
          <div className=" flex flex-col gap-4 ">
            <p className="text-title font-semibold ">Rexby</p>
            <p className="text-gray-400 text-sm">About Us</p>
            <p className="text-gray-400 text-sm">Term of Use</p>
            <p className="text-gray-400 text-sm">Privacy Policy</p>
          </div>
          <div className=" pl-12 sm:pl-0 flex flex-col gap-4 ">
            <p className="text-title font-semibold ">Contact Us</p>
            <p className="text-gray-400 text-sm">Hallgerðargata 13</p>
            <p className="text-gray-400 text-sm">105 Reykjavík Iceland</p>
            <p className="text-gray-400 text-sm">hello@rexby.com</p>
            <div className="flex flex-row gap-8 pt-4">
              <a href="https://www.facebook.com/rexbytravel/" target="_blank">
                <svg
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.11163 3.29509H9.92331V0.139742C9.61075 0.0967442 8.53581 0 7.28393 0C4.67183 0 2.88248 1.643 2.88248 4.66274V7.44186H0V10.9693H2.88248V19.845H6.41654V10.9701H9.18243L9.6215 7.44269H6.41571V5.01251C6.41654 3.99297 6.69106 3.29509 8.11163 3.29509Z"
                    fill="#A0A3BD"
                  ></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/rexbycom/" target="_blank">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83643 0H16.0864C19.8828 0 22.9614 3.07862 22.9614 6.875V15.125C22.9614 18.9214 19.8828 22 16.0864 22H7.83643C4.04005 22 0.961426 18.9214 0.961426 15.125V6.875C0.961426 3.07862 4.04005 0 7.83643 0ZM16.0864 19.9375C18.7402 19.9375 20.8989 17.7787 20.8989 15.125V6.875C20.8989 4.22125 18.7402 2.0625 16.0864 2.0625H7.83643C5.18268 2.0625 3.02393 4.22125 3.02393 6.875V15.125C3.02393 17.7787 5.18268 19.9375 7.83643 19.9375H16.0864Z"
                    fill="#A0A3BD"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.46143 11C6.46143 7.96263 8.92405 5.5 11.9614 5.5C14.9988 5.5 17.4614 7.96263 17.4614 11C17.4614 14.0374 14.9988 16.5 11.9614 16.5C8.92405 16.5 6.46143 14.0374 6.46143 11ZM8.52393 11C8.52393 12.8948 10.0667 14.4375 11.9614 14.4375C13.8562 14.4375 15.3989 12.8948 15.3989 11C15.3989 9.10388 13.8562 7.5625 11.9614 7.5625C10.0667 7.5625 8.52393 9.10388 8.52393 11Z"
                    fill="#A0A3BD"
                  ></path>
                  <circle
                    cx="17.874"
                    cy="5.08737"
                    r="0.732875"
                    fill="#A0A3BD"
                  ></circle>
                </svg>
              </a>
            </div>
          </div>
          <div className="pt-[-300px] flex flex-col gap-4 ">
            <p className="text-title font-semibold ">Our Licence</p>
            <p className="text-gray-400 text-sm">Kt: 6909211460</p>
            <p className="text-gray-400 text-sm">Vsk: 146757</p>
            <a
              href="https://www.ferdamalastofa.is/en/licences-legislation/travel-agency/list-of-travel-agencies-1"
              target="_blank"
            >
              <img
                src="https://www.rexby.com/travel-agency-license.png"
                alt="rexby travel agency"
                className="w-[131px] h-[145px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
