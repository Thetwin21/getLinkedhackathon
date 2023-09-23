import React from "react";
import logo from "../images/getlinked.svg";
import twitter from "../images/xt.svg";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook, BiLogoLinkedin, BiSolidPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="flex w-full relative  items-center justify-center px-5 md:px-12 py-10 bg-[#100B20] overflow-hidden">
        <span class="star1"></span>
        <span class="span star2"></span>
        <span class="span star3"></span>
        <span class="span star4"></span>
        <span class="span star6"></span>
        <span class="span star7"></span>
        <span class="span star8"></span>
        <span class="span star9"></span>

        {/* <span class="span star10"></span> */}


        <span class="span star12"></span>

        <span class="span star13"></span>
        
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 max-w-[600px] md:p-12 md:max-w-[1020px] lg:max-w-[3000px] text-[#fff]">
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-3">
            <Link to='/'>

            <img src={logo} alt={logo} />
            </Link>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="flex gap-x-3 items-center my-14 md:my-0 md:justify-self-end">
            <span className="cursor-pointer">
              Terms of Use
            </span>
            <span className="h-full w-[2px] max-h-[5px]: bg-pink"></span>
            <span>
              <a href="#privacy">Privacy Policy</a>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <h3 className="text-pink text-base font-semibold">Useful Links</h3>
            <ul className="space-y-5 mt-5">
              <li>
                <span>Overview</span>
              </li>
              <li>
                <a href="#timeline">Timeline</a>
              </li>
              <li>
                <Link to='#faqs'>FAQs
                </Link>
              </li>
              <li>
                <Link to='/register'>Register
                </Link>
              </li>
              <div className="flex gap-3 items-center">
                <p className="text-pink">Follow us</p>
                <div className="flex gap-3 items-center">
                  <FaInstagram className="cursor-pointer"/>
                  <a href="https://twitter.com/getLinkedai?t=vSs2JGIrGn_gwVO26rw-iA&s=09">

                  <img className="w-[13px] cursor-pointer" src={twitter} alt={twitter} />
                  </a>
                  <BiLogoFacebook className="cursor-pointer"/>
                  <BiLogoLinkedin className="cursor-pointer"/>
                </div>
              </div>
            </ul>
          </div>
          <div className="space-y-4 mt-14 md:mt-0 w-full">
            <h3 className="text-pink text-base font-semibold">Contact Us </h3>
            <div className="flex gap-2 items-center">
              <BiSolidPhoneCall />
              <p>+234 6707653444</p>
            </div>
            <div className="flex gap-2 items-start align-baseline">
              <MdLocationOn className="text-lg"/>
              <p className="max-w-[70%] md:max-w-[initial]">27,Alara Street Yaba 100012 Lagos State</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
