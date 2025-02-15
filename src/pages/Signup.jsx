import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext"; 
import Input from "../components/Input"; 
import Button from "../components/Button"; 
import { useNavigate ,Link } from "react-router-dom";
import { useState ,useEffect } from "react";
import Banner from "../components/Banner";
import { FaTv, FaGlobe, FaUserPlus, FaChild } from "react-icons/fa";
// import { MdPerson} from "react-icons/Md";

function Signup() {
  useEffect(() => {
    const savedEmail = localStorage.getItem("signupEmail");

    if (savedEmail){
      setEmail(savedEmail);
      localStorage.removeItem("signupEmail");
    }

  },[])

  const [email,setEmail] =useState("");
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup } = useAuth(); // AuthContext signup function
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signup(data.email, data.password);
      navigate("/dashboard"); // Successful signup redirect
    } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

  return (
    
    <div className="mx-auto h-[900px] relative ">
      <div className=" ">
      <div className=" absolute w-full z-2 h-full bg-gradient-to-r from-black via-black/50 to-black"></div>
        <Banner/>
      </div>
      <div className=" z-10 rounded-sm bg-black/50 h-[80vh] absolute w-[450px] mx-auto top-[11%] right-[32%]">
      <h2 className="text-2xl font-bold  m-15 mb-4">Sign Up</h2>
      <form className=" w-[300px] m-auto " onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <Input
          type="email"
          placeholder="Enter your email"
          value = {email}
          className =""
          onChange = {(e) => {
            setEmail(e.target.value)
          }}
         
        {...register("email", { required: "email is required" })}

        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}</div>

        <Input
          
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <Button type="submit" className="w-full py-2 mt-3 rounded-sm flex flex-row justify-center items-center gap-4">Sign Up <FaUserPlus className="text-white text-3xl" /></Button>
      </form>
      <div className=" m-auto w-fit mt-4">Or</div>

    <div className=" m-auto w-fit mt-5">New to Netflix? <Link className=" font-bold  text-glow animate-pulse" to= "/login">Sign up now.</Link>  </div>
    <div className="m-auto w-fit gap-20 flex flex-row mt-20">
    <FaTv className="text-red-500 text-3xl" />
    {/* <MdPerson className="text-red-500 text-3xl" /> */}
    <FaGlobe className="text-red-500 text-3xl" />
    {/* <FaUserPlus className="text-red-500 text-3xl" /> */}
    <FaChild className="text-red-500 text-3xl" />
    </div>
    <div className=" text-[14px] text-gray-400/50 w-[77%] m-auto">
    This page is a demo Model so . this is not have Google reCAPTCHA to ensure you are not a bot. <p className="text-glow"> Learn more.</p>
    </div>
      </div>
    </div>
    
  );
}
export default Signup;

