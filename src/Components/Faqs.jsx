import React from "react";
import img1 from "../images/cwok_casual_21 1.svg";
import img2 from "../images/_.svg";
import { IoIosAdd } from "react-icons/io";

const Faqs = () => {
  return (
    <section id="faqs" className="flex w-full relative md:mt-10 items-center justify-center px-5 md:px-12 py-10 border-b-solid border-b-[1px] border-[#FFFFFF2E]">

      <div className="absolute max-w-[600px] md:p-12 md:max-w-[1020px] lg:max-w-[3000px] w-[250px] h-[250px] min-w-[250px] min-h-[250px] rounded-[100%] bg-gpink opacity-40 blur-2xl z-0  m-auto right-0 top-[-20%]"></div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        <div data-aos="fade-right" className="text-[#fff] ">
          <div className="">
            <h3 className="text-2xl font-semibold text-center md:text-start">Frequently Ask</h3>
            <h3 className="text-2xl text-pink font-semibold text-center md:text-start ">Question</h3>
            <p className="mt-3 text-base text-center md:text-start">
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
            <div className="w-full mt-10 space-y-5">
              <div className="flex justify-between items-center cursor-pointer border-b-solid border-b-[1px] border-[#D434FE] border-spacing-[15px] py-3">
                <p className="text-sm">
                  Can I work on a project I started before the hackathon?
                </p>
                <span>
                  <IoIosAdd className={"text-[#D434FE]"} />
                </span>
              </div>
              <div className="flex justify-between items-center cursor-pointer border-b-solid border-b-[1px] border-[#D434FE] border-spacing-[15px] py-3">
                <p className="text-sm">
                  What happens if I need help during the hackathon?
                </p>
                <span>
                  <IoIosAdd className={"text-[#D434FE]"} />
                </span>
              </div>
              <div className="flex justify-between items-center cursor-pointer border-b-solid border-b-[1px] border-[#D434FE] border-spacing-[15px] py-3">
                <p className="text-sm">
                  What happens if I don't have an idea for a project?
                </p>
                <span>
                  <IoIosAdd className={"text-[#D434FE]"} />
                </span>
              </div>
              <div className="flex justify-between items-center cursor-pointer border-b-solid border-b-[1px] border-[#D434FE] border-spacing-[15px] py-3">
                <p className="text-sm">
                  Can I join a team or do I have to come with one?
                </p>
                <span>
                  <IoIosAdd className={"text-[#D434FE]"} />
                </span>
              </div>
              <div className="flex justify-between items-center cursor-pointer border-b-solid border-b-[1px] border-[#D434FE] border-spacing-[15px] py-3">
                <p className="text-sm">What happens after the hackathon ends</p>
                <span>
                  <IoIosAdd className={"text-[#D434FE]"} />
                </span>
              </div>
              <div className="flex justify-between items-center cursor-pointer border-b-solid border-b-[1px] border-[#D434FE] border-spacing-[15px] py-3">
                <p className="text-sm">
                  Can I work on a project I started before the hackathon?
                </p>
                <span>
                  <IoIosAdd className={"text-[#D434FE]"} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full h-full relative mt-16 md:mt-0">
          <img
            className={
              "absolute z-0 top-[5%] w-[27px] md:w-[30px] left-[10%] animate-noding"
            }
            src={img2}
            alt={img2}
          />
          <img
            className={
              "absolute z-0 top-[-10%] left-0 right-[30%] m-auto w-[33px] md:w-[40px] animate-noding"
            }
            src={img2}
            alt={img2}
          />
          <img
            className={
              "absolute z-0 top-[5%] right-[40%] w-[27px] md:w-[30px] animate-noding"
            }
            src={img2}
            alt={img2}
          />
          <img className="w-full h-full" src={img1} alt={img1} />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
