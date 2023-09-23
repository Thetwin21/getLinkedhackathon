import React from "react";
import img1 from "../images/Vector.svg";
import img2 from "../images/08 1.svg";
import list from "../images/list terms.svg";

const Privacy = () => {
  return (
    <section id="privacy" className="flex w-full relative items-center justify-center px-5 md:px-12 py-10 bg-[#d9d9d907] ">

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
        
         <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] min-w-[150px] min-h-[150px] md:min-w-[250px] md:min-h-[250px] rounded-[100%] bg-gpink opacity-40 blur-2xl z-0  m-auto left-[-2%] bottom-[10%]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 max-w-[600px] md:p-12 md:max-w-[1020px] lg:max-w-[3000px] w-full ">
        <div data-aos="fade-up" className="gap-y-5">
          <h3 className="text-2xl text-center md:text-start font-semibold text-[#fff]">
            Privacy Policy and
          </h3>
          <h3 className="text-2xl text-center md:text-start text-pink font-semibold ">Terms</h3>
          <p className=" mb-10 text-[#fff] text-center md:text-start text-base">
            <small>Last updated on September 12, 2023</small>
          </p>
          <p className="text-[#fff] text-center md:text-start text-base">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className="my-16 p-8 border-solid border-[1px] border-[#D434FE] rounded-[5px]  space-y-5 relative z-10">
            <p className="text-[#fff] text-sm text-center md:text-start">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div>
              <h4 className="text-lg text-pink font-semibold">
                Licensing Policy
              </h4>
              <p className="text-[#fff] text-base">
                Here are terms of our Standard License:
              </p>
              <div className="my-5 space-y-4">
                <div className="flex gap-2 items-start">
                  <img src={list} alt={list} />
                  <p className="text-[#fff] text-sm">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
                <div className="flex gap-2 items-start ">
                  <img src={list} alt={list} />
                  <p className="text-[#fff] text-sm">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="relative w-full">
          <img className="absolute w-[80%] left-0 right-0 self-center m-auto" src={img1} alt={img1} />
          <img className="md:w-full mt-20 md:mt-0 w-[80%] left-0 right-0 m-auto" src={img2} alt={img2} />
        </div>
      </div>
    </section>
  );
};

export default Privacy;
