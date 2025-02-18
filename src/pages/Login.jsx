

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext"; 
import Input from "../components/Input"; 
import Button from "../components/Button"; 
import { useNavigate ,Link } from "react-router-dom";
import { useState,useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import {FaUserCheck,FaTv,FaGlobe,FaChild,FaSpinner} from "react-icons/fa"
import Banner from "../components/Banner";


export default function Login() {
  // eslint-disable-next-line no-unused-vars
  const [email,setEmail] =useState("");
  const { register, handleSubmit, formState: { errors },setValue } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [responce, setResponse] = useState("")
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const savedEmail = localStorage.getItem("signupEmail");
      
    if (savedEmail){
      setEmail(savedEmail);
      setValue("email",savedEmail)
      localStorage.removeItem("signupEmail");
    }

  },[setValue])

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
      setResponse("succesfully loged in ✔")
     setEmail("succesfull.")
      navigate("/dashboard"); // Successful login ke baad redirect
    } catch (error) {
      console.error("Login Error:", error.message);
      setResponse(error.message);
      setLoading(false);
    }
  };

  return (
   
    <div className="md:mx-auto mx-0 h-[700px] overflow-hidden relative ">
      <div className="relative ">
      <div className=" absolute w-full z-2 h-full bg-gradient-to-r from-black via-black/40 to-black"></div>
         <Banner category ="/discover/movie?with_genres=28,12,878"> <div></div></Banner>
         <div className=" absolute h-1 w-full z-2 bg-gradient-to-r from-pink-700/50 via-red-600 to-pink-700/50 bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
      <div className=" z-10 absolute h-[80%] md:h-[100%]  w-full  top-0 flex">
      <div className=" z-20 rounded-sm flex flex-col gap-10 justify-center items-center h-fit lg:bg-black/50 p-4  2xl:p-10 w-[450px] m-auto ">
      <h2 className="text-2xl font-bold  ">Login</h2>
      <form className=" w-[300px] m-x-auto flex justify-center items-center flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
         
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
          onChange = {(e) => {
            setEmail(e.target.value)
            setValue("email",e.target.value)
          }}
        //   {...register("email", {
        //     required: true,
        //     validate: {
        //         matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        //         "Email address must be a valid address",
        //     }
        // })}
       


        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>} 

        <Input
          
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          {responce ? responce :""}
        <Button type="submit" className="w-full cursor-pointer py-2  rounded-sm flex flex-row justify-center items-center gap-4">{loading ? <FaSpinner className=" fast-spin mr-2" size={20} /> : <p className="font-bold"> Log in</p> } <FaUserCheck className="text-white text-xl" /></Button>
      </form>
      <div className=" m-x-auto w-fit ">Or</div>

    <div className=" m-x-auto w-fit">New to Netflix? <Link className=" font-bold  text-glow animate-pulse" to= "/signup">Sign up now.</Link>  </div>
     
    </div>
      </div>
    </div>
   
  );
}