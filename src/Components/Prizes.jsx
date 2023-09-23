import React from "react";
import img1 from "../images/Rewards.svg";
import img2 from "../images/9486889 1.svg";

const Prizes = () => {
  return (
    <section className="flex w-full md:mt-10 items-center justify-center px-5 md:px-12 md:py-10 relative">
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
      <div className="w-full px-3">
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:block"></div>
          <div className="text-center md:text-start mb-7 md:mb-0">
            {" "}
            <h3 className="text-2xl text-[#fff] font-semibold">Prizes and</h3>
            <h3 className="text-2xl text-pink font-semibold ">Rewards</h3>
            <p className="mt-3 text-base text-[#fff]">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-5 w-full md:gap-8  space-y-7 md:space-y-0">
          <div className="md:col-span-2 relative w-full m-auto">
            <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] min-w-[150px] min-h-[150px] md:min-w-[250px] md:min-h-[250px] rounded-[100%] bg-gpink opacity-40 blur-2xl z-0  m-auto md:right-0 top-[-20%]"></div>
            <img className="relative z-10 " src={img2} alt={img2} />
          </div>
          <div className="col-span-3 relative">
            <img className="relative z-10" src={img1} alt={img1} />
            <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] min-w-[150px] min-h-[150px] md:min-w-[250px] md:min-h-[250px] rounded-[100%] bg-gpink opacity-40 blur-2xl z-0  m-auto right-[-40%] top-[20%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
