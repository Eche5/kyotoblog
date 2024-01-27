import React from "react";
import arrow from "../../public/Images/Vector.png";
import smiley from "../../public/Images/Kyoto Creative.png";
import background from "../../public/Images/FooterBackground.png";

import Image from "next/image";
import Link from "next/link";
function Together() {
  return (
    <div className=" bg-gradient-to-r from-stone-200 to-neutral-500 relative  p-10 rounded-3xl m-4 text-black">
      <div className="md:flex justify-around items-center">
        <Image src={smiley} className=" w-96 h-48 " alt="smiley" />
        <Image src={background} alt="background" className=" absolute"/>
        <div className=" text-center flex flex-col gap-4">
          <h5 className="  w-fit mt-[-1.00px] text-center font-RobotoMono font-normal  md:text-[20px] tracking-[0] leading-[29.1px] whitespace-nowrap">
            Need a successful project?
          </h5>
          <h5 className=" w-fit font-Syncopate font-bold  md:text-[40px] tracking-[0] leading-[47.6px] whitespace-nowrap">
            LETS WORK TOGETHER
          </h5>
          <div className=" flex items-center gap-4">
            <a className=" hover:scale-125 transition-all ease-in-out duration-200">
              <svg
                width="25"
                height="25"
                viewBox="0 0 42 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_611_218)">
                  <path
                    d="M38.0625 1.7919H3.9375C3.16323 1.78402 2.41745 2.08362 1.86381 2.62495C1.31017 3.16629 0.993894 3.90515 0.984375 4.6794V38.9422C0.995616 39.7153 1.31265 40.4525 1.8661 40.9924C2.41955 41.5323 3.16435 41.831 3.9375 41.8232H38.0625C38.8368 41.8293 39.5821 41.5287 40.1354 40.987C40.6888 40.4453 41.0052 39.7066 41.0156 38.9324V4.66956C41.0018 3.89757 40.6839 3.16224 40.1309 2.62339C39.5779 2.08454 38.8346 1.78572 38.0625 1.7919Z"
                    fill="#0076B2"
                  />
                  <path
                    d="M6.91031 16.7971H12.8526V35.917H6.91031V16.7971ZM9.88312 7.28149C10.5647 7.28149 11.2309 7.48364 11.7976 7.86236C12.3642 8.24108 12.8058 8.77936 13.0665 9.4091C13.3272 10.0388 13.3952 10.7317 13.262 11.4002C13.1288 12.0686 12.8003 12.6825 12.3182 13.1642C11.836 13.6459 11.2218 13.9738 10.5533 14.1063C9.88471 14.2389 9.19187 14.1702 8.56238 13.9089C7.93289 13.6476 7.39503 13.2055 7.01685 12.6385C6.63867 12.0715 6.43716 11.4051 6.43781 10.7235C6.43868 9.81034 6.80205 8.93485 7.44807 8.28944C8.0941 7.64403 8.96993 7.28149 9.88312 7.28149ZM16.5802 16.7971H22.2764V19.4221H22.3552C23.1492 17.9193 25.0852 16.3345 27.9759 16.3345C33.9937 16.3213 35.1094 20.2818 35.1094 25.417V35.917H29.167V26.6146C29.167 24.3998 29.1277 21.5484 26.0794 21.5484C23.0311 21.5484 22.5127 23.9634 22.5127 26.4702V35.917H16.5802V16.7971Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_611_218">
                    <rect
                      width="42"
                      height="42"
                      fill="white"
                      transform="translate(0 0.807617)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a className=" hover:scale-125 transition-all ease-in-out duration-200">
              {" "}
              <svg
                width="25"
                height="25"
                viewBox="0 0 42 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="twitter 1" clip-path="url(#clip0_611_215)">
                  <path
                    id="Vector"
                    d="M37.7003 13.2397C37.7258 13.6102 37.7258 13.9803 37.7258 14.354C37.7258 25.74 29.0578 38.8715 13.2083 38.8715V38.865C8.52603 38.8715 3.94076 37.5304 0 35.0016C0.680859 35.0837 1.365 35.1247 2.05078 35.1263C5.93155 35.1294 9.7007 33.8278 12.7526 31.4306C10.9544 31.3967 9.21187 30.8016 7.7685 29.7287C6.32513 28.6558 5.25312 27.1587 4.70236 25.4466C5.99419 25.696 7.32506 25.6445 8.59294 25.298C4.57275 24.4859 1.68066 20.9539 1.68066 16.8521V16.7428C2.87907 17.4104 4.22036 17.7803 5.59158 17.8213C1.80469 15.2908 0.638203 10.2538 2.92458 6.31596C5.08787 8.97792 7.78693 11.1551 10.8464 12.706C13.906 14.2569 17.2575 15.1468 20.6834 15.3181C20.3419 13.8477 20.3924 12.3134 20.8299 10.8686C21.2674 9.42389 22.0766 8.11933 23.1765 7.08541C26.647 3.82287 32.1054 3.99021 35.3676 7.45915C37.2974 7.07811 39.148 6.37058 40.8397 5.36702C40.1964 7.36225 38.8504 9.05592 37.0519 10.133C38.76 9.93164 40.4281 9.47425 42 8.77624C40.8436 10.508 39.3876 12.0195 37.7003 13.2397Z"
                    fill="#1D9BF0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_611_215">
                    <rect
                      width="42"
                      height="42"
                      fill="white"
                      transform="translate(0 0.807617)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a className=" hover:scale-125 transition-all ease-in-out duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fd5"></stop>
                  <stop offset=".328" stop-color="#ff543f"></stop>
                  <stop offset=".348" stop-color="#fc5245"></stop>
                  <stop offset=".504" stop-color="#e64771"></stop>
                  <stop offset=".643" stop-color="#d53e91"></stop>
                  <stop offset=".761" stop-color="#cc39a4"></stop>
                  <stop offset=".841" stop-color="#c837ab"></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#4168c9"></stop>
                  <stop
                    offset=".999"
                    stop-color="#4168c9"
                    stop-opacity="0"
                  ></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                ></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                ></path>
              </svg>
            </a>
          </div>
          <div className=" flex justify-center pt-10">
            <div className="w-[268px] h-[82.23px] relative">
              <div className="w-[257px] h-[72px] left-0 top-[10.23px] absolute bg-black border-2 border-white" />
              <Link href="/Contact">
                <div className="w-64 h-[71px] px-[35px] py-[26px] left-[12px] hover:left-0 hover:top-3 transition-all top-0 absolute bg-white text-black flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-[9px] inline-flex">
                    <h5 className="text-center text-black text-lg font-bold font-Syncopate uppercase leading-[19.10px] text-[20px] flex justify-between items-center gap-2">
                      Contact us
                      <Image
                        src={arrow}
                        className=" text-black w-4 h-4"
                        alt="arrow"
                      />
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Together;
