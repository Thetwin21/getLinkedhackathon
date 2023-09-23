import React from "react";
import congrats from "../images/congratulation.svg";
import { Link } from "react-router-dom";

const Congrats = () => {
  return (
    <section className="flex flex-col h-screen w-screen px-5 md:px-12 md:py-4 items-center justify-center text-[#fff] fixed top-0 left-0 z-50 bg-[#150e28e3] ">
      <div className="flex flex-col w-full md:w-[400px] md:h-[430px] border-solid border-[1px] border-[#D434FE] p-5 justify-between text-center shadow-lg max-w-[320px] md:max-w-[400px] ">
        <img className="w-[300px]" src={congrats} alt={congrats} />
        <div>
          <p>
            Congratulations <br />
            you have successfully Registered!
          </p>
          <p className="text-xs my-3">
            Yes, it was easy and you did it! check your mail box for next step
          </p>
        </div>
        <button className="bg-gradient-primary w-full md:w-full text-[#fff] rounded-sm py-3 cursor-pointer">
          <Link to="/">back</Link>
        </button>
      </div>
    </section>
  );
};

export default Congrats;
