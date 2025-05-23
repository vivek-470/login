import React from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom"; 



const Signup = () => {
  const navigate = useNavigate();
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

   const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/signup/account", { state: data });
  };
  

  return (
    <div className="flex justify-center mt-[50px] h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
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
             {...register("fullName", { required: "Full Name is required" })}
          />{errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
        </div>

        <div className="flex flex-col gap-2 mt-5">
          <label className="text-purple-800">Phone number</label>
          <input
            className="border-2 h-[40px] rounded-md border-gray-300 focus:outline-none"
            type="text"
            name="phone"
            placeholder="Phone number"
             {...register("phone", { required: "Phone number is required" })}
          /> 
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-purple-800">Email address</label>
          <input
            className="border-2 h-[40px] rounded-md border-gray-300 focus:outline-none"
            type="email"
            name="email"
            placeholder="Email address"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-purple-800">Password</label>
          <input
            className="border-2 h-[40px] rounded-md border-gray-300 focus:outline-none"
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-purple-800">Company name</label>
          <input
            className="border-2 h-[40px] rounded-md border-gray-300 focus:outline-none"
            type="text"
            name="company"
            placeholder="Company name"
            {...register("company", { required: "Company name is required" })}
          />
          {errors.company && <p className="text-red-500">{errors.company.message}</p>}
        </div>

        <p className="mt-3">Are you an Agency?</p>
        <div className="flex mt-3 gap-2 mb-2">
          <label>
            <input type="radio" name="isAgency" value="yes" required /> Yes
          </label>
          <label className="20px" >
            <input type="radio" name="isAgency" value="no" required /> No
          </label>
        </div>
        
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
        
      </form>
    </div>
  );
};

export default Signup;
