import React, { useRef, useState, useEffect, useCallback } from "react";
import { PiGlobeThin } from "react-icons/pi";
import { VscMenu } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import navbarImage from '../../public/navbar.png'

const navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

 
    const handleClickOutside = (event) => {

      console.log(event.target)
      if (
        menuRef.current && !menuRef.current.contains(event.target) && 
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);

      console.log('I am in useEEg')
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

  return (
    <>
      <nav className="flex items-center justify-center w-full md:h-[70px] ">
        <div className="hidden md:flex items-center justify-between w-[93%] ">
          <div className="flex items-center gap-2 text-teal-600 ">
             <img src={navbarImage} alt="" width={110} height={70} />
          </div>
          <div className="flex items-center gap-4.5">
            <button className=" py-1.5 px-6 border-1 border-gray-300 rounded-xl font-semibold text-md cursor-pointer text-gray-900">
              Log In
            </button>
            <PiGlobeThin className="text-gray-600 text-xl cursor-pointer " />
            {!showMenu ? (
              <VscMenu
                className="text-gray-600 text-xl cursor-pointer "
                onClick={handleShowMenu}
                ref={buttonRef}
              />
            ) : (
              <RxCross1
                className="text-gray-600 text-xl cursor-pointer "
                onClick={handleShowMenu}
              />
            )}
          </div>
        </div>
        {showMenu && (
          <div className="absolute flex flex-col gap-4 top-18 border-1 border-gray-200 right-8 w-80 rounded-2xl bg-white shadow-xl px-8 py-6 z-50"
          ref={menuRef}>
            <h3 className="text-md font-semibold text-gray-400 uppercase tracking-wider mb-4">
              REXBY
            </h3>
            <ul className=" font-semibold flex flex-col gap-5 text-gray-500 text-[14px] ">
              <li>About Us</li>
              <li>Start exploring</li>
              <li>Become a travel creator</li>
            </ul>
            <hr className="my-4 border-gray-200 w-full" />
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-black block"
            >
              Log in
            </a>
          </div>
        )}

        <div className="flex items-center justify-between bg-white border-1 border-gray-200 fixed bottom-0 max-w-full w-full flex-row gap-6 px-10 py-2 md:hidden">
          <div className="flex flex-col items-center gap-0.5 cursor-pointer">
            <svg viewBox="0 0 32 32" width="20" height="20" className="my-icon">
              <circle cx="16" cy="16" r="16" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 18.6472 0.642684 21.1435 1.78046 23.3432C1.85358 20.5645 1.85828 18.8431 1.84688 17.761C1.84553 17.6242 1.84084 17.2444 1.8556 16.7326C1.88176 15.7961 1.91799 14.6824 2.20914 13.3642C2.34465 12.7497 2.48486 12.3029 2.61501 11.9171C3.1034 10.4688 3.82792 9.1465 4.81476 7.97317C4.82616 7.95975 4.84092 7.94834 4.85568 7.93694C4.86306 7.93157 4.87044 7.92553 4.87715 7.9195C4.99924 7.72159 5.16361 7.55857 5.32662 7.3969C5.36822 7.3553 5.40981 7.31371 5.45073 7.27212C6.13769 6.56771 6.91119 5.97132 7.75245 5.46281C7.78398 5.44335 7.81887 5.4286 7.85375 5.41451C7.86985 5.4078 7.88528 5.40109 7.90138 5.39371C8.31329 5.11262 8.76679 4.91002 9.22365 4.72084C9.78918 4.48671 10.3587 4.25929 10.9665 4.15195C11.3288 4.02918 11.7038 3.97015 12.0795 3.91111C12.1781 3.89568 12.2774 3.88025 12.376 3.86348C12.9221 3.7709 13.4762 3.75212 14.0243 3.75883C14.9997 3.77157 15.9772 3.80579 16.9399 4.00704C16.9956 4.01845 17.0519 4.03052 17.1083 4.04193C17.4833 4.11908 17.8583 4.1969 18.2219 4.32168C18.8988 4.48671 19.5341 4.76176 20.1627 5.05694C20.7343 5.32528 21.2468 5.68486 21.76 6.04512L21.7828 6.06122C22.0069 6.16319 22.188 6.32553 22.3671 6.48654C22.406 6.52143 22.4456 6.55698 22.4852 6.59119C23.2359 7.24528 23.8927 7.98457 24.4173 8.83388C24.5132 8.98885 24.5997 9.14985 24.687 9.31019C24.7265 9.38398 24.7668 9.45711 24.807 9.53023C25.1747 10.1521 25.4115 10.8263 25.6107 11.516C25.8918 12.4887 26.0173 13.4829 25.9958 14.4946C25.9649 15.947 25.6376 17.331 24.9996 18.6392C24.9788 18.6821 24.954 18.7223 24.9291 18.7633C24.9184 18.7807 24.907 18.7982 24.8969 18.8163C24.6105 19.3577 24.2999 19.8843 23.9108 20.3592C23.8625 20.4183 23.8504 20.478 23.8517 20.5471C24.0188 21.2401 24.1583 21.9398 24.2502 22.6475C24.3354 23.303 24.4106 23.9584 24.4475 24.6192C24.4649 24.9338 24.4609 24.8621 24.4777 25.0801C24.5568 26.0924 24.532 27.1094 24.5655 28.1244C24.5662 28.1405 24.5662 28.1868 24.5387 28.2103C24.5119 28.2331 24.4703 28.2271 24.4307 28.2224C24.4146 28.2204 24.3985 28.2184 24.3844 28.2184C23.5854 28.2217 22.7857 28.2237 21.9861 28.219C21.8418 28.2184 21.6969 28.2197 21.552 28.2217C21.2287 28.2251 20.9053 28.2291 20.5826 28.2043C20.5625 28.1674 20.5571 28.1278 20.5565 28.0889C20.5357 27.9594 20.5397 27.8279 20.5444 27.6971C20.5464 27.6361 20.5484 27.5757 20.5478 27.5153C20.5384 26.3467 20.4927 25.1794 20.378 24.0161C20.3592 23.8303 20.3371 23.6444 20.3143 23.4593C20.3036 23.3741 20.2935 23.2896 20.2834 23.2044C20.1647 23.2151 20.0587 23.2627 19.952 23.3104C19.8601 23.3513 19.7682 23.3922 19.6689 23.4096C18.1105 24.004 16.4917 24.2462 14.834 24.155C13.1254 24.061 11.6542 23.4345 10.5707 22.0498C10.5566 22.0317 10.5452 22.0109 10.5338 21.9901C10.5285 21.9807 10.5238 21.9713 10.5184 21.9626C9.98105 21.2501 9.66709 20.4538 9.54633 19.567C9.41551 18.6063 9.51346 17.6805 9.84889 16.7769C10.0018 16.3629 10.1937 15.9671 10.4708 15.6183C11.0712 14.7119 11.8849 14.0632 12.8805 13.6433C13.5561 13.3582 14.2631 13.2132 14.9991 13.1683C16.2999 13.0878 17.5517 13.277 18.7592 13.7593C19.9353 14.2296 20.9154 14.9702 21.7124 15.9537C21.8311 15.7914 21.8579 15.6008 21.8841 15.4123C21.8901 15.3714 21.8955 15.3305 21.9022 15.2902C22.1196 13.9794 21.9257 12.7275 21.3374 11.5368C21.3233 11.5079 21.3125 11.4777 21.3018 11.4475C21.2964 11.4328 21.2911 11.4174 21.285 11.4026C21.0019 10.9162 20.6893 10.454 20.3009 10.0421C20.0768 9.80528 19.8266 9.60201 19.5757 9.39874C19.4818 9.32226 19.3872 9.24579 19.2946 9.16797C18.8176 8.88084 18.3346 8.60713 17.814 8.40319C17.4323 8.25291 17.0385 8.14826 16.6447 8.04361C16.5488 8.01811 16.4528 7.99262 16.3569 7.96646C15.5968 7.83698 14.8327 7.75379 14.0599 7.75983C13.2917 7.76587 12.5384 7.85979 11.7984 8.06641C11.7629 8.07648 11.7253 8.08117 11.6884 8.0852C11.6709 8.08721 11.6542 8.08922 11.6367 8.09191C11.0068 8.30256 10.4037 8.57627 9.81333 8.8795C9.02977 9.3491 8.37233 9.96159 7.79539 10.6653C7.77795 10.6868 7.75581 10.7049 7.73434 10.723C7.72428 10.7311 7.71421 10.7398 7.70482 10.7485C7.67128 10.7988 7.63774 10.8485 7.60419 10.8988C7.34323 11.2886 7.08226 11.6783 6.8743 12.1003C6.32017 13.2273 6.00688 14.4195 5.91564 15.6693C5.82977 16.852 5.83245 18.0361 5.83581 19.2208C5.83715 19.7461 5.83849 20.2707 5.83245 20.7953C5.82574 21.336 5.82507 22.6885 5.80226 24.0604C5.78482 25.1156 5.75128 26.5238 5.68218 28.2184C6.72537 29.1032 8.587 30.455 11.2449 31.2842C11.2456 31.2815 13.5936 32 16 32ZM5.75195 22.5013H5.75329V22.4993C5.75329 22.5 5.75262 22.5 5.75195 22.5013ZM6.18734 7.94163C6.21149 7.95774 6.22826 7.9792 6.23899 8.00537C6.22222 7.98323 6.20478 7.96243 6.18734 7.94163ZM17.4356 8.10264C17.4571 8.09727 17.4732 8.08788 17.486 8.07447C17.4819 8.09862 17.4678 8.11203 17.4356 8.10264ZM11.1322 20.9805C11.1564 20.9684 11.1805 20.957 11.2054 20.9456C11.1859 20.963 11.1597 20.9731 11.1322 20.9805ZM18.0669 19.7387C18.1105 19.7206 18.1541 19.7031 18.1971 19.6844C18.2756 19.6508 18.3547 19.62 18.4345 19.5898C18.6747 19.4972 18.9156 19.4046 19.1175 19.2342C18.4191 17.9596 17.3518 17.2626 15.8967 17.1626C15.0863 17.1069 14.3188 17.176 13.7513 17.861C13.7392 17.8871 13.7265 17.9133 13.7144 17.9395C13.6862 17.9992 13.658 18.0582 13.6332 18.1192C13.4259 18.6137 13.4172 19.0987 13.705 19.569C14.0491 19.9601 14.4966 20.1083 15.0018 20.1519C15.3137 20.1788 15.6223 20.1587 15.9309 20.1392C15.9638 20.1372 15.9973 20.1352 16.0302 20.1325C16.7031 20.0902 17.3665 19.9876 18.0065 19.7629C18.0273 19.7548 18.0468 19.7468 18.0669 19.7387ZM22.8689 24.9265C22.8877 24.9077 22.9327 24.9003 22.9669 24.901C22.934 24.9104 22.9011 24.9184 22.8689 24.9265Z"
                fill="#1B83A6"
              />
            </svg>
            <p className=" text-xs sm:text-2xs text-gray-300 font-semibold">Rexby</p>
          </div>

          <div className="flex flex-col items-center gap-0.5 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.59961 3.7002C7.09961 0.200195 12.7996 0.200195 16.2996 3.7002C19.7996 7.2002 19.7996 12.9003 16.2996 16.4003C12.7996 19.9003 7.09961 19.9003 3.59961 16.4003C0.0996094 12.9003 0.0996094 7.2002 3.59961 3.7002Z"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.89829 13.5002L6.99829 7.80014C7.09829 7.40014 7.39829 7.10022 7.79829 7.00022L13.4983 5.90024C13.7983 5.80024 14.1983 6.10022 14.0983 6.50022L12.9983 12.2002C12.8983 12.6002 12.5983 12.9002 12.1983 13.0002L6.49829 14.1002C6.09829 14.2002 5.79829 13.9002 5.89829 13.5002Z"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.99883 9.7998C9.89883 9.7998 9.79883 9.89988 9.79883 9.99988C9.79883 10.0999 9.89883 10.1998 9.99883 10.1998C10.0988 10.1998 10.1988 10.0999 10.1988 9.99988C10.1988 9.89988 10.0988 9.7998 9.99883 9.7998Z"
                fill="#4E4B66"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
            <p className="text-xs sm:text-2xs text-gray-300 font-semibold">Explore</p>
          </div>

          <div className="flex flex-col items-center gap-0.5 cursor-pointer">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0474 6.37744H3.02972C2.53312 6.37744 2.03652 6.77472 2.03652 7.27132L1.24191 19.0904C1.14259 20.2823 2.03647 21.1761 3.22832 21.1761H14.8488C16.0407 21.1761 16.9346 20.1829 16.8352 19.0904L16.0406 7.27132C16.0406 6.77472 15.544 6.37744 15.0474 6.37744Z"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.00977 4.39123C6.00977 2.70278 7.30093 1.41162 8.98937 1.41162C10.6778 1.41162 11.969 2.70278 11.969 4.39123"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.00977 4.39111V8.36392"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9688 4.39111V8.36392"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-xs sm:text-2xs text-gray-300 font-semibold">Purchase</p>
          </div>

          <div className="flex flex-col items-center gap-0.5 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6993 16.9004L18.1993 2.20047C18.4993 1.40047 17.6993 0.600419 16.8993 0.900419L2.19935 6.40042C1.29935 6.70042 1.39934 8.10032 2.29934 8.30032L9.09934 10.0003L10.7993 16.8003C10.9993 17.8003 12.2993 17.9004 12.6993 16.9004Z"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.8996 1.2002L9.09961 10"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-xs sm:text-2xs text-gray-300 font-semibold">Message</p>
          </div>

          <div className="flex flex-col items-center gap-0.5 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                stroke="#4E4B66"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <mask
                id="mask0_9815_21499"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="2"
                y="1"
                width="16"
                height="17"
              >
                <path
                  d="M10.0004 17.0999C14.1978 17.0999 17.6004 13.6974 17.6004 9.5C17.6004 5.30264 14.1978 1.8999 10.0004 1.8999C5.80306 1.8999 2.40039 5.30264 2.40039 9.5C2.40039 13.6974 5.80306 17.0999 10.0004 17.0999Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_9815_21499)">
                <path
                  d="M10.0002 11.0999C11.5466 11.0999 12.8002 9.8462 12.8002 8.2998C12.8002 6.75341 11.5466 5.5 10.0002 5.5C8.45385 5.5 7.2002 6.75341 7.2002 8.2998C7.2002 9.8462 8.45385 11.0999 10.0002 11.0999Z"
                  stroke="#4E4B66"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.6998 16.8999C14.2998 15.3999 12.1998 14.3999 9.99982 14.3999C7.79982 14.3999 5.6998 15.2999 4.2998 16.8999"
                  stroke="#4E4B66"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <p className="text-xs sm:text-2xs text-gray-300 font-semibold">Log in</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
