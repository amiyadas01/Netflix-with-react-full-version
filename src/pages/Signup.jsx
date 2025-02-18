/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext"; 
import Input from "../components/Input"; 
import Button from "../components/Button"; 
import { useNavigate ,Link } from "react-router-dom";
import { useState ,useEffect } from "react";
import Banner from "../components/Banner";
import { FaTv, FaGlobe, FaUserPlus, FaChild,FaSpinner } from "react-icons/fa";
// import { MdPerson} from "react-icons/Md";

function Signup() {
  const [email,setEmail] =useState("");
  const[loading,setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors },setValue } = useForm();
  const { signup } = useAuth(); // AuthContext signup function
  const navigate = useNavigate();
  const [responce, setResponse] = useState("")


  useEffect(() => {
    const savedEmail = localStorage.getItem("signupEmail");
    if (savedEmail){
      setEmail(savedEmail);
      setValue("email",savedEmail);
    }
  },[setValue])
  const textCutter = (text, limit) => {
    return text?.length > limit ? text.substring(0, limit) + "....." : text ;
   }
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await signup(data.email, data.password);
      localStorage.removeItem("signupEmail");
      setResponse("succesfully account created ✔✔")
      navigate("/dashboard"); // Successful signup redirect
    } catch (error) {
      console.error("Signup Error:", error.message);
      localStorage.removeItem("signupEmail");
      setResponse(()=>textCutter(error.message,70))
      setLoading(false)
    }
  };

  return (
    
    <div className="mx-auto h-[700px] relative  overflow-hidden">
      <div className="relative ">
      <div className=" absolute w-full z-2 h-full bg-gradient-to-r from-black via-black/50 to-black"></div>
         <Banner category ="/discover/movie?with_genres=28,12,878"> <div></div></Banner>
         <div className=" absolute h-1 w-full z-2 bg-gradient-to-r from-pink-700/50 via-red-600 to-pink-700/50 bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
      <div className=" z-10 absolute h-[80%] md:h-[100%]  w-full  top-0 flex">
      <div className="  z-20 rounded-sm flex flex-col gap-10 justify-center items-center h-fit lg:bg-black/50 p-4  2xl:p-10 w-[450px] m-auto  ">
      <h2 className="text-2xl font-bold ">Sign Up</h2>
      <form className="w-[300px] m-x-auto flex justify-center items-center flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "email is required" })}
          onChange = {(e) => {
            setEmail(e.target.value)
            setValue("email",e.target.value)
          }}
         
       

        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <Input
          
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        {responce ? responce :""}
        <Button type="submit" className="w-full py-2 cursor-pointer rounded-sm flex flex-row justify-center items-center gap-4">{loading ? <FaSpinner className=" fast-spin mr-2" size={20} /> : <p className="font-bold">Sign up</p>} <FaUserPlus className="text-white text-xl" /></Button>
      </form>
      <div className=" m-x-auto w-fit">Or</div>

    <div className=" m-x-auto w-fit">Already have an account? <Link className=" font-bold  text-glow animate-pulse" to= "/login">log in now.</Link>  </div>
    </div>
      </div>
    </div>
    
  );
}
export default Signup;

