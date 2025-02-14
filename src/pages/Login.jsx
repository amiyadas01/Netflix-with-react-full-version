

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext"; 
import Input from "../components/Input"; 
import Button from "../components/Button"; 
import { useNavigate } from "react-router-dom";


export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/dashboard"); // Successful login ke baad redirect
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
   
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email:"
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
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <Input
          label="Password:"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <Button type="submit" className="w-full">Login</Button>
      </form>
    </div>
   
  );
}