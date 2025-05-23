import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      fullName: form.fullName.value,
      phone: form.phone.value,
      email: form.email.value,
      password: form.password.value,
      company: form.company.value,
      isAgency: form.isAgency.value,
    };

    console.log("Form Data:", data);
  };

  return (
    <div className="flex justify-center mt-[50px] h-full">
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <h2>Create your PopX account</h2>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-purple-800">Full Name</label>
          <input
            className="border-2 h-[40px] rounded-md border-gray-300 focus:outline-none"
            type="text"
            name="fullName"
            placeholder="Full name"
            required
          />
        </div>

        <div className="flex flex-col gap-2 mt-5">
          <label className="text-purple-800">Phone number</label>
          <input
            className="border-2 h-[40px] rounded-md border-gray-300 focus:outline-none"
            type="text"
            name="phone"
            placeholder="Phone number"
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-purple-800">Email address</label>
          <input
            className="border-2 h-[40px] rounded-md border-gray-300 focus:outline-none"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-purple-800">Password</label>
          <input
            className="border-2 h-[40px] rounded-md border-gray-300 focus:outline-none"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-purple-800">Company name</label>
          <input
            className="border-2 h-[40px] rounded-md border-gray-300 focus:outline-none"
            type="text"
            name="company"
            placeholder="Company name"
            required
          />
        </div>

        <p className="mt-3">Are you an Agency?</p>
        <div className="flex mt-3">
          <label>
            <input type="radio" name="isAgency" value="yes" required /> Yes
          </label>
          <label className="20px" >
            <input type="radio" name="isAgency" value="no" required /> No
          </label>
        </div>
        <Link to="/signup/account">
          <button
            type="submit"
            style={{
              background: "purple",
              color: "white",
              padding: "10px",
              width: "100%",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Create Account
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
