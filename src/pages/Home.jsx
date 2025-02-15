import MovieList from "../components/MoviesList"
import Banner from "../components/Banner"
import Input from "../components/Input"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FeatureCards from "../components/FeatureCards";
import FAQItem from "../components/FAQItem";

function Home() {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");

  const onSubmit = () => {
    
    if(email.length>0){
      localStorage.setItem("signupEmail",email);
      navigate("/signup");
      
    }
  };

  return (
    <div >
      <div className=" relative ">
      <div className=" absolute w-full h-full flex flex-row justify-center items-center ">
          <div className=" text-white font-extrabold z-10 text-6xl absolute pb-60 ">Unlimited movies, TV </div>
          <div className=" text-white font-extrabold z-10 text-6xl absolute pb-25">shows and more</div>
          <div className=" text-white font-medium z-10 text-[22px] absolute pt-8">Starts at ₹149. Cancel at any time.</div>
          <div className=" text-white font-medium z-10 text-[16px] absolute pt-35">Ready to watch? Enter your email to create or restart your membership.</div>
          <div className=" z-10 absolute  w-[600px] max-w-[700px] pt-63">
         <div className=" flex max-w-[700px] gap-2">
        <Input
          type="email"
          placeholder="Enter email"
            onChange = {(e) => {
                  setEmail(e.target.value)
                  
            }}          
        />
       
        <Button onClick={onSubmit} className=" cursor-pointer w-80 rounded-sm">
           <div className="flex flex-row justify-center items-center">
            <div className=" font-medium text-2xl"> Get Started</div>
              
              <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true"><path d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></div>
              </div>
              </Button>
              </div>
             
          </div>
      </div>
      <div className=" absolute w-full z-2 h-full bg-gradient-to-r from-black via-black/50 to-black"></div>
         <Banner> <div></div></Banner>
        </div>
      <div className="h-1 w-full bg-gradient-to-r from-pink-700 via-red-600 to-pink-700"></div>
      
      <div id="trending-sec" className="z-1 w-full m-auto relative">
        <div className="text-2xl font-medium absolute">Trending Now</div>
        <MovieList/>
        </div>
        <div>
            <FeatureCards/>
        </div>
        <div>
            <FAQItem/>
        </div>
        <div className=" text-white font-medium z-10 text-[16px] w-[520px] pt-10 m-auto ">Ready to watch? Enter your email to create or restart your membership.</div>
        <div className=" z-10 w-[800px] m-auto pt-8">
         <div className=" flex max-w-[800px] gap-2 ">
        <Input
          type="email"
          placeholder="Enter email"
          className ="500px"
            onChange = {(e) => {
                  setEmail(e.target.value)
                  
            }}          
        />
       
        <Button onClick={onSubmit} className=" cursor-pointer w-80 rounded-sm">
           <div className="flex flex-row justify-center items-center">
            <div className=" font-medium text-2xl"> Get Started</div>
              
              <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true"><path d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></div>
              </div>
              </Button>
              </div>
             
          </div>

    </div>
    
  )
}

export default Home