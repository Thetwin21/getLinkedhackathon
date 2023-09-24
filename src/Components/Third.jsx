import React from "react";
import img1 from "../lady.svg";
const Third = () => {
  return (
    <section className="flex w-full items-center justify-center px-5 md:px-12 py-10 border-b-solid border-b-[1px] border-[#FFFFFF2E] relative">
        <span class="span star4"></span>
        <span class="span star9"></span>

        <span class="span star12"></span>

      <div className="max-w-[600px] md:p-12 md:max-w-[1020px] lg:max-w-[3000px] flex flex-col-reverse md:grid md:grid-cols-2 gap-3 md:gap-6 items-center">
        <div className="text-[#fff] relative">
          <div className="absolute w-[300px] h-[300px] min-w-[300px] min-h-[300px] rounded-[100%] bg-gpink opacity-40 blur-2xl z-0 self-center m-auto left-[0] right-[0]"></div>
          <div className="relative z-10">
            <h3 data-aos="fade-right" className="text-2xl font-semibold text-center md:text-start">Rules and </h3>
            <h3 data-aos="fade-right" className="text-2xl text-pink font-semibold text-center md:text-start">Guidelines</h3>
            <p data-aos="fade-right" className="mt-3">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full h-full ">
          <img className="w-full h-full" src={img1} alt={img1} />
        </div>
      </div>
    </section>
  );
};

export default Third;
