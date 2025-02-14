import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext"; 
import Input from "../components/Input"; 
import Button from "../components/Button"; 
import { useNavigate } from "react-router-dom";

function Signup() {
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
    
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email:"
          type="email"
          placeholder="Enter your email"
          // {...register("email", {
          //   required: true,
          //   validate: {
          //       matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          //       "Email address must be a valid address",
          //   }
        // })}
        {...register("email", { required: "email is required" })}

        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <Input
          label="Password:"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
    </div>
    
  );
}
export default Signup;

