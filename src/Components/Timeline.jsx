import React from "react";
import Timelinelg from '../Components/Timelinelg'
import Timelingsm from "./Timelingsm";

const Timeline = () => {
  return (
    <section id="timeline" className="flex w-full md:mt-10 items-center justify-center px-5 md:px-12 py-10 relative">
      <span class="star1"></span>
        <span class="span star2"></span>

        <span class="span star10"></span>

        <span class="span star11"></span>

        <span class="span star12"></span>

        <span class="span star13"></span>
      <div className="max-w-[600px] md:p-12 md:max-w-[1020px] lg:max-w-[3000px] w-full flex flex-col justify-center ">
        <div data-aos="fade-up" className="flex flex-col text-[#fff] text-center">
          <h3 className="text-2xl font-semibold ">Timeline</h3>
          <p className="mt-3 text-base self-center max-w-[90%] md:max-w-[80%]">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <Timelinelg />
        <Timelingsm />
      </div>
    </section>
  );
};

export default Timeline;
