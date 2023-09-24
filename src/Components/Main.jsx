import React from "react";
import chain from "../images/chain-9365116-7621444.svg";
import man from "../images/man-wearing-smart-glasses-touching-virtual-screen 1 (30).svg";
import img1 from "../images/backimg.svg";
import star from "../images/1f4a5.svg";
import light from "../images/Creative 1.svg";
import { Link } from "react-router-dom";


const Main = () => {


  return (
    <div className="flex flex-col w-full h-full px-5 max-w-[600px] md:max-w-[1020px] lg:max-w-[3000px] pt-7 md:px-24 md:pt-4 lg:pt-7 items-center justify-center md:border-b-solid md:border-b-[1px] md:border-[#FFFFFF2E] relative">
      
      <span class="star1"></span>
        <span class="span star2"></span>
        <span class="span star3"></span>
        <span class="span star4"></span>
        <span class="span star5"></span>
        <span class="span star6"></span>
        <span class="span star7"></span>
        <span class="span star8"></span>
        <span class="span star9"></span>

        <span class="span star10"></span>

        <span class="span star11"></span>

        <span class="span star12"></span>

        <span class="span star13"></span>

      <div className="grid grid-cols-2 gap-x-3 md:my-5">
        <div className="hidden md:block mb-5 md:mb-0 "></div>
        <div>
          <p className="overflow-hidden space-x-[.15em] whitespace-nowrap text-[#fff] animate-writing my-0 mx-auto border-r-solid border-r-[.18em]  text-lg font-semibold ">
            <i>
              Igniting a Revolution in{" "}
              <span className="linec">HR Innovation</span>
            </i>{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 pt-14 md:pt-0">
        <div className="w-full relative pb-0 md:pb-10 md:mb-0 text-center md:text-start">
          <div className="absolute w-[280px] h-[280px] min-w-[280px] min-h-[280px] rounded-[100%] bg-gpink opacity-40 blur-2xl z-0 self-center m-auto left-[50%]"></div>
          <div data-aos="fade-right" className="space-y-7 relative text-[#fff] z-10">
            <div className="flex flex-col gap-y-3 justify-center w-full items-center md:items-start md:justify-start">
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold flex flex-nowrap">getlinked T<span className="relative"><img className="absolute top-[-50%] right-[-30%] z-10" src={light} alt={light} />e</span>ch</h2>
              <h2 className="flex text-4xl md:text-4xl lg:text-6xl font-bold md:items-end">
                Hackathon <span className="text-[#D434FE]">1.0</span>{" "}
                <img className="w-10 md:w-16" src={chain} alt={chain} />
                <img
                  className="animate-blinking w-8 h-8"
                  src={star}
                  alt={star}
                />
              </h2>
            </div>
            <p className="text-base md:max-w-lg">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Link to='/register'><button className="bg-gradient-primary w-24 md:w-32 my-7 text-[#fff] rounded-sm py-3 ">
              Register
            </button></Link>
            <div className="my-10">
              <div className="flex mt-5 gap-x-4">
                <span>
                  <p className="text-[#fff] text-2xl">
                    0<small className="text-xs">H</small>
                  </p>
                </span>
                <span>
                  <p className="text-[#fff] text-2xl">
                    0<small className="text-xs">M</small>
                  </p>
                </span>
                <span>
                  <p className="text-[#fff] text-2xl">
                    0<small className="text-xs">S</small>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full relative pt-6 md:pt-0">
          <div className=" h-full overflow-hidden">
            <img
              className="z-10 absolute animate-rotating"
              src={img1}
              alt={img1}
            />
            <img
              className="bottom-0  md:absolute bg-white object-cover"
              src={man}
              alt={man}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
