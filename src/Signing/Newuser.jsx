import React, { useState } from "react";
import Registerform from "./Registerform";
import manimg from '../images/3d-graphic-designer-showing-thumbs-up-png 1 (1).svg'
import goo from '../images/Part of move.svg'
import Congrats from "./Congrats";

const Newuser = () => {
  
  const [success, setSuccess] = useState(false);

  return (
    <section id="sign" className="flex flex-col w-full h-full   md:py-4 items-center justify-center text-[#fff]  relative">
     
      <div className="w-full max-w-[600px] md:max-w-[1020px] lg:max-w-[3000px] grid grid-cols-1 md:grid-cols-9 mt-7  px-5 pb-8 md:px-20 justify-between items-center relative">
      <span class="star1"></span>
        <span class="span star2"></span>
        <span class="span star3"></span>
        <span class="span star4"></span>
        <span class="span star5"></span>

        <span class="span star11"></span>

        <span class="span star12"></span>

        <span class="span star13"></span>
      <div className="absolute w-[150px] h-[150px] min-h-[150px] min-w-[150px] md:w-[300px] md:h-[300px] md:min-w-[300px] md:min-h-[300px] rounded-[100%] bg-gpink opacity-40 blur-2xl z-0 self-center m-auto left-[0] top-0"></div>
      <div className="absolute w-[300px] h-[300px] md:min-w-[300px] min-h-[300px] rounded-[100%] bg-gpink opacity-40 blur-2xl z-0 self-center m-auto bottom-0 right-[0] hidden md:block"></div>
        <div className="hidden md:block col-span-4 relative z-10">
            <img className="object-cover w-full" src={manimg} alt={manimg} />
            
        </div>
        <div className="flex flex-col md:col-span-5 gap-y-4 px-4 md:p-12 bg-[transparent] md:bg-[#ffffff0c] relative z-10 shadow-lg rounded-lg">
            <h3 className="text-2xl text-[#D434FE] font-bold">Register</h3>
            <div className="flex flex-col gap-y-2">
                <img className="w-[250px]" src={goo} alt={goo} />
                <p className="text-lg">CREATE YOUR ACCOUNT</p>
            </div>
          <Registerform setSuccess={setSuccess} />
        </div>
      </div>
      {
        success && <Congrats />
      }
    </section>
  );
};

export default Newuser;
