import React from "react";
import { FaInstagram } from "react-icons/fa";
import twitter from "../images/xt.svg";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import Loginform from "./Loginform";

const Signup = () => {
  return (
    <section
      id="log"
      className="flex flex-col w-full pb-4 h-full md:pt-7 items-center justify-center text-[#fff]"
    >
      <div className="w-full grid grid-cols-1 px-5 md:px-20  md:grid-cols-2 mt-7  justify-between items-center relative">
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
        <div className="hidden md:block">
          <div className="flex flex-col gap-y-7 w-full">
            <h1 className="text-pink text-3xl font-semibold">Get in touch</h1>
            <h3 className="text-base font-semibold">
              Contact <br /> Information{" "}
            </h3>

            <span className="flex items-start align-baseline ">
              <p className="">
                27,Alara Street <br /> Yaba 100012 <br /> Lagos State
              </p>
            </span>
            <span>
              <p>Call Us : 07067981819</p>
            </span>
            <span>
              <p>
                we are open from Monday-Friday <br /> 08:00am - 05:00pm
              </p>
            </span>
            <div className="flex gap-3 items-center">
              <p className="text-pink">Share on</p>
              <div className="flex gap-3 items-center">
                <FaInstagram className="cursor-pointer" />
                <a href="https://twitter.com/getLinkedai?t=vSs2JGIrGn_gwVO26rw-iA&s=09">
                  <img
                    className="w-[13px] cursor-pointer"
                    src={twitter}
                    alt={twitter}
                  />
                </a>
                <BiLogoFacebook className="cursor-pointer" />
                <BiLogoLinkedin className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 px-4 md:p-10 bg-[transparent] md:bg-[#ffffff0c]  shadow-lg rounded-lg">
          <div>
            <span className="text-pink text-lg">
              <p>Questions or need assistance?</p>
              <p>Let us know about it!</p>
            </span>
            <p className="my-4">
              Email us below to any question related to our event
            </p>
          </div>
          <Loginform />
        </div>
      </div>
    </section>
  );
};

export default Signup;
