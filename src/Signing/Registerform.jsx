import React, { useReducer, useRef, useState } from "react";
import axios from "axios";

const Registerform = ({ setSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: 0,
    project_topic: "",
    category: 0,
    privacy_policy_accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type == "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://backend.getlinked.ai/hackathon/registration", formData)
      .then((response) => {
        console.log("Registration successful:", response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        // Reset form after successful submission 
        setFormData({
          email: "",
          phone_number: "",
          team_name: "",
          group_size: 0,
          project_topic: "",
          category: 0,
          privacy_policy_accepted: false,
        });
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Error registering contact:", error);
      });
  };

  return (
    <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 items-center">
        <div className="flex flex-col gap-y-2 ">
          <label htmlFor="">Team’s Name</label>
          <input
            className="focus:ring-[#D434FE] focus:border-[#D434FE] focus:bg-bg text-[#fff] text-sm p-2 border-solid border-[1px] border-[#FFFFFF] bg-[transparent] outline-none"
            type="text"
            name="team_name"
            placeholder="Enter the name of your group"
            value={formData.team_name}
            onChange={handleChange}
            id=""
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 ">
          <label htmlFor="">Phone Number</label>
          <input
            className="focus:ring-[#D434FE] focus:border-[#D434FE] focus:bg-bg text-[#fff] text-sm p-2 border-solid border-[1px] border-[#FFFFFF] bg-[transparent] outline-none"
            type="tel"
            name="phone_number"
            placeholder="Enter your phone number"
            value={formData.phone_number}
            onChange={handleChange}
            id=""
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-4 items-center">
        <div className="flex flex-col gap-y-2 ">
          <label htmlFor="">Email</label>
          <input
            className="focus:ring-[#D434FE] focus:border-[#D434FE] focus:bg-bg text-[#fff] text-sm p-2 border-solid border-[1px] border-[#FFFFFF] bg-[transparent] outline-none"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            id=""
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 ">
          <label htmlFor="project_topic">Project Topic</label>
          <input
            className="focus:ring-[#D434FE] focus:border-[#D434FE] focus:bg-bg text-[#fff] text-sm p-2 border-solid border-[1px] border-[#FFFFFF] bg-[transparent] outline-none"
            type="text"
            name="project_topic"
            placeholder="What is your group project topic"
            value={formData.project_topic}
            onChange={handleChange}
            id="project_topic"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 items-center">
        <div className="flex flex-col gap-y-2 ">
          <label htmlFor="category">Category</label>
          <select className="block focus:ring-[#D434FE] focus:border-[#D434FE] focus:bg-bg text-sm p-2 border-solid border-[1px] border-[#FFFFFF] bg-[transparent] outline-none" name="category" value={formData.categoryormData} id="category" onChange={handleChange}>
            <option selected disabled>Select your category</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-2 ">
          <label htmlFor="group_size">Group Size</label>
          <select className="block focus:ring-[#D434FE] focus:border-[#D434FE] focus:bg-bg text-sm p-2 border-solid border-[1px] border-[#FFFFFF] bg-[transparent] outline-none" name="group_size" value={formData.group_size} id="group_size" onChange={handleChange}>
            <option selected disabled>Select</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={20}>50</option>
            <option value={20}>100</option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <p className="text-xs text-pink my-3">
          Please review your registration details before submitting
        </p>
        <span className="flex place-items-baseline gap-x-1">
          <input
            className="text-[#fff] text-sm p-2 border-solid border-[1px] border-[#FFFFFF] bg-[transparent] outline-none"
            type="checkbox"
            name="privacy_policy_accepted"
            checked={formData.privacy_policy_accepted}
            onChange={handleChange}
            id="privacy_policy_accepted"
          />
          <label htmlFor="check" className="text-sm">
            I agreed with the event terms and conditions and privacy policy
          </label>
        </span>
      </div>
      <div className="flex justify-center items-center">
      <button className="bg-gradient-primary w-24 md:w-32 text-[#fff] rounded-sm py-3 cursor-pointer" type="submit">
        Register
      </button>
      </div>
   
    </form>
  );
};

export default Registerform;
