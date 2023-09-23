import React from "react";
import ideas from "../images/The big idea.svg";

const Second = () => {
  return (
    <section className="flex w-full items-center mt-7 md:mt-0  justify-center px-5 md:px-12 py-10 border-b-solid border-b-[1px] border-[#FFFFFF2E]">
      <div className="max-w-[600px] md:p-12 md:max-w-[1020px] lg:max-w-[3000px] grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 items-center">
      <div data-aos="fade-right" className="w-full h-full my-7">
        <img className="w-full h-full" src={ideas} alt={ideas} />
      </div>
      <div data-aos="fade-left" className="text-[#fff] ">
        <h3 className="text-2xl font-semibold text-center md:text-start">Introduction to getlinked </h3>
        <h3 className="text-2xl text-pink font-semibold text-center md:text-start">tech Hackathon 1.0</h3>
        <p className="mt-3">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      </div>
    </section>
  );
};

export default Second;
