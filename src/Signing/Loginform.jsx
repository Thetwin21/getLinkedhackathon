import React, { useState } from "react";
import axios from "axios";

const Loginform = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setFormData(storedUser.phone_number)
    if (storedUser && storedUser.email === formData.email ) {
      axios
        .post("https://backend.getlinked.ai/hackathon/contact-form", formData)
        .then((response) => {
          console.log("Registration successful:", response.data);
          // Reset form after successful submission
          setFormData({
            email: "",
            phone_number: "",
            first_name: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    }else{
      alert('user not registre')
    }
  };

  return (
    <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
      <input
        className="focus:ring-[#D434FE] focus:border-[#D434FE] focus:bg-bg text-[#fff] text-sm p-2 border-solid border-[1px] border-[#FFFFFF] bg-[transparent] outline-none"
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
        id="first_name"
        required
      />
      <input
        className="focus:ring-[#D434FE] focus:border-[#D434FE] focus:bg-bg text-[#fff] text-sm p-2 border-solid border-[1px] border-[#FFFFFF] bg-[transparent] outline-none"
        type="email"
        name="email"
        placeholder="Mail"
        value={formData.email}
        onChange={handleChange}
        id="email"
        required
      />

      <textarea
        className="text-[#fff] text-sm p-2 border-solid border-[1px] border-[#FFFFFF] bg-[transparent] outline-none"
        name="message"
        id="message"
        cols="30"
        rows="10"
        type="text"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Message"
      ></textarea>
      <div className="flex justify-center items-center">
        <button className="bg-gradient-primary w-24 md:w-32 text-[#fff] rounded-sm py-3 cursor-pointer">
          Register
        </button>
      </div>
    </form>
  );
};

export default Loginform;
