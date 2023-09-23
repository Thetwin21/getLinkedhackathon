import React, { useState } from "react";
import icon from "../images/getlinked (1).svg";
import { Link } from "react-router-dom";

const Navar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <section className="flex fixed top-0 left-0 right-0 h-fit z-30 flex-col bg-bg md:flex-row w-full pb-1 mb-2 pt-7 md:py-7 justify-between px-5 md:px-12 md:items-center border-b-solid border-b-[1px] border-[#FFFFFF2E]">
      
      <div className="flex justify-between items-center mb-7 md:mb-0">
        <Link to="/">
          <img className="w-[150px] md:w-[200px]" src={icon} alt={icon} />
        </Link>
        <div
          id="nav-icon"
          onClick={() => setToggleOpen(!toggleOpen)}
          className={`${toggleOpen ? "open" : ""} md:hidden z-40`}
        >
          <span className="spannav"></span>
          <span className="spannav"></span>
          <span className="spannav"></span>
        </div>
      </div>
      <div className="hidden md:flex gap-x-10 items-center">
        <ul className="flex gap-x-7 text-[#fff] justify-between">
          <li className="hover:border-b-[2px] border-[#D434FE] border-spacing-7 cursor-pointer">
            <a href="#timeline">Timeline</a>
          </li>
          <li className="hover:border-b-[2px] border-[#D434FE] border-spacing-7 cursor-pointer">
            <a href="#overview">Overview</a>
          </li>
          <li className="hover:border-b-[2px] border-[#D434FE] border-spacing-7 cursor-pointer">
            <a href="#faqs">FAQs</a>
          </li>
          <li className="hover:border-b-[2px] border-[#D434FE] border-spacing-7 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <Link to="/register">
            <button className="bg-gradient-primary w-24 md:w-32 text-[#fff] rounded-sm py-3">
              Register
            </button>
          </Link>
        </div>
      </div>
      <div
        className={` flex-col md:hidden gap-y-10 md:gap-y-0 gap-x-10 md:items-center hidden absolute m-0 p-0 top-[100px] w-full transform transition-all border-b-solid border-b-[1px] border-[#FFFFFF2E] bg-bg ${
          toggleOpen ? "openmenu" : ""
        }`}
      >
        <ul className="flex flex-col space-y-7 md:space-y-0 md:flex-row gap-x-7 text-[#fff] mb-[30px] md:justify-between">
          <li className="hover:border-b-[2px] border-[#D434FE] border-spacing-7 cursor-pointer">
            <span>Timeline</span>
          </li>
          <li className="hover:border-b-[2px] border-[#D434FE] border-spacing-7 cursor-pointer">
            <a href="#overview">Overview</a>
          </li>
          <li className="hover:border-b-[2px] border-[#D434FE] border-spacing-7 cursor-pointer">
            <a href="#faqs">FAQs</a>
          </li>
          <li className="hover:border-b-[2px] border-[#D434FE] border-spacing-7 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="w-full flex md:block justify-center md:justify-normal">
          <Link to="/register">
            <button className="bg-gradient-primary w-24 md:w-32 text-[#fff] rounded-sm py-3 cursor-pointer">
              Register
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navar;
