import React from "react";
import img1 from "../images/Partner and sponsors section.svg";

const Sponsors = () => {
  return (
    <section className="flex w-full md:mt-10 items-center justify-center px-5 md:px-12 py-10  border-b-solid border-b-[1px] border-[#FFFFFF2E] relative">

<span class="star1"></span>
        <span class="span star4"></span>
        <span class="span star8"></span>
        <span class="span star9"></span>

        <span class="span star10"></span>


        <span class="span star13"></span>
        
      <div className="w-full max-w-[600px] md:p-12 md:max-w-[1020px] lg:max-w-[3000px] flex flex-col justify-center gap-y-10">
        <div data-aos="fade-up" className="flex flex-col text-[#fff] text-center">
          <h3 className="text-2xl font-semibold ">Partners and Sponsors</h3>
          <p className="mt-3 text-base self-center max-w-[90%] md:max-w-[80%]">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="my-10 mb-16 relative">
        <div className="absolute w-[100px] h-[100px] md:w-[250px] md:h-[250px] min-w-[100px] min-h-[100px] md:min-w-[250px] md:min-h-[250px] rounded-[100%] bg-gpink opacity-40 blur-2xl z-0  m-auto left-[-15%] top-[-20%]"></div>

        <div className="absolute w-[100px] h-[100px] md:w-[250px] md:h-[250px] min-w-[100px] min-h-[100px] md:min-w-[250px] md:min-h-[250px]  rounded-[100%] bg-gpink opacity-40 blur-2xl z-0  m-auto right-[-15%] bottom-[-20%]"></div>
            <img data-aos="fade-up" className="relative z-10 border-[1px] border-solid border-[#D434FE]" src={img1} alt={img1} />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
