

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext"; 
import Input from "../components/Input"; 
import Button from "../components/Button"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {FaUserCheck,FaTv,FaGlobe,FaChild} from "react-icons/fa"
import Banner from "../components/Banner";


export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [responce, setResponse] = useState("")

  const onSubmit = async (data) => {
    
    try {
      await login(data.email, data.password);
      setResponse("Login successful");
      navigate("/dashboard"); // Successful login ke baad redirect
    } catch (error) {
      console.error("Login Error:", error.message);
      setResponse(error.message);
    }
  };

  return (
   
    <div className="mx-auto h-[900px] relative ">
      <div className=" ">
      <div className=" absolute w-full z-2 h-full bg-gradient-to-r from-black via-black/50 to-black"></div>
        <Banner/>
      </div>
      <div className=" z-10 rounded-sm bg-black/50 h-[80vh] absolute w-[450px] mx-auto top-[11%] right-[32%]">
      <h2 className="text-2xl font-bold  m-15 mb-4">Login</h2>
      <form className=" w-[300px] m-auto " onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <Input
         
          type="email"
          placeholder="Enter your email"
        //   {...register("email", {
        //     required: true,
        //     validate: {
        //         matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        //         "Email address must be a valid address",
        //     }
        // })}
        {...register("email", { required: "Password is required" })}


        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>} </div>

        <Input
          
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <Button type="submit" className="w-full py-2 mt-3 rounded-sm flex flex-row justify-center items-center gap-4">{responce? responce:"log in" } <FaUserCheck className="text-white text-3xl" /></Button>
      </form>
      <div className="m-auto w-fit gap-20 flex flex-row mt-20">
    <FaTv className="text-red-500 text-3xl" />
    {/* <MdPerson className="text-red-500 text-3xl" /> */}
    <FaGlobe className="text-red-500 text-3xl" />
    {/* <FaUserPlus className="text-red-500 text-3xl" /> */}
    <FaChild className="text-red-500 text-3xl" />
    </div>
      </div>
    </div>
   
  );
}