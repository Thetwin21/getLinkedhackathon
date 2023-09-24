import React from "react";
import img1 from "../images/8046554 1.svg";

const Fourt = () => {
  return (
    <section className="flex w-full items-center justify-center px-5 md:px-12 py-12 border-b-solid border-b-[1px] my-10 border-[#FFFFFF2E]">
      <div className="max-w-[600px] md:p-12 md:max-w-[1020px] lg:max-w-[3000px] grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 items-center ">
        <div data-aos="fade-up" className="w-full h-full relative mb-10 md:mb-0">
          <div className="absolute w-[180px] h-[180px] min-w-[180px] min-h-[180px] rounded-[100%] bg-gpink opacity-40 blur-2xl z-0 self-center m-auto left-[0] bottom-[-5%] md:bottom-[10%]"></div>
          <div className="relative w-full h-full">
            <div className="absolute w-[120px] h-[120px] min-w-[120px] min-h-[120px] rounded-[100%] bg-gradient-primary left-10 top-[15%] hidden md:block"></div> 
        <span class="span star7"></span>
        <span class="span star9"></span>

        <span class="span star10"></span>
            <img
              className="w-full h-full relative z-10"
              src={img1}
              alt={img1}
            />
          </div>
        </div>

        <div className="text-[#fff] text-center md:text-start">
          <h3 data-aos="fade-left" className="text-2xl font-semibold">Judging Criteria</h3>
          <h3 data-aos="fade-left" className="text-2xl text-pink font-semibold ">Key attributes</h3>
          <p data-aos="fade-left" className="mt-3">
            <span className="text-[#FF26B9]">Innovation and Creativity: </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p data-aos="fade-left" className="mt-3">
            <span className="text-[#FF26B9]">
              Innovation and Functionality:{" "}
            </span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p data-aos="fade-left" className="mt-3">
            <span className="text-[#FF26B9]">
              Innovation and Impact and Relevance:{" "}
            </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p data-aos="fade-left" className="mt-3">
            <span className="text-[#FF26B9]">
              Innovation and Adherence to Hackathon Rules:{" "}
            </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements. Evaluate
            the uniqueness and creativity of the solution. Consider whether it
            addresses a real-world problem in a novel way or introduces
            innovative features.
          </p>
          <button data-aos="fade-left" className="bg-gradient-primary w-24 md:w-32 my-7 text-[#fff] rounded-sm py-3 ">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fourt;
