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
  // eslint-disable-next-line no-unused-vars
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
      setResponse(error.message)
      setLoading(false)
    }
  };

  return (
    
    <div className="mx-auto h-[900px] relative ">
      <div className="relative ">
      <div className=" absolute w-full z-2 h-full bg-gradient-to-r from-black via-black/50 to-black"></div>
         <Banner> <div></div></Banner>
         <div className=" absolute h-1 w-full z-2 bg-gradient-to-r from-pink-700/50 via-red-600 to-pink-700/50 bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
      <div className=" z-10 rounded-sm md:bg-black/50 h-[80vh] absolute w-[450px] mx-auto top-[11%] right-[-12%] md:right-[32%]">
      <h2 className="text-2xl font-bold  m-15 mb-4">Sign Up</h2>
      <form className=" w-[300px] m-auto " onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <Input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "email is required" })}
          onChange = {(e) => {
            setEmail(e.target.value)
            setValue("email",e.target.value)
          }}
         
       

        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}</div>

        <Input
          
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        {responce ? responce :""}
        <Button type="submit" className="w-full py-2 mt-3 rounded-sm flex flex-row justify-center items-center gap-4">{loading ? <FaSpinner className=" fast-spin mr-2" size={20} /> : "sign up"} <FaUserPlus className="text-white text-3xl" /></Button>
      </form>
      <div className=" m-auto w-fit mt-4">Or</div>

    <div className=" m-auto w-fit mt-5">Already have an account? <Link className=" font-bold  text-glow animate-pulse" to= "/login">log in now.</Link>  </div>
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

