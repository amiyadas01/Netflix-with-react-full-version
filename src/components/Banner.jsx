/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmdb";
import { FaRegStar } from "react-icons/fa";
// import axios from 'axios';


function Banner({children,selectedMovie,category}) {
 
  const [movie, setMovie] = useState("");
  const [videoKey ,setVideokey] =useState(null);
  const [showTrailer ,SetShowTrailer] = useState( false)
  const [msg ,setMsg] = useState("")
const url = (url) => `url(${url})`;
useEffect(()=>{
  if(selectedMovie){
    setMovie(selectedMovie)
    fetchTrailer(selectedMovie.id) 
  }
},[selectedMovie])
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies(category, { language: "en-US", page: 1 });
        if (data.results.length > 0) {
          const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
          setMovie(randomMovie);
          fetchTrailer(randomMovie.id) ;
        }
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    getMovies();
  }, [category]);
  const textCutter = (text, limit) => {
    return text?.length > limit ? text.substring(0, limit) + "....." : text ;
   }
  const fetchTrailer = async ( movieId) => {
    try {
      const data = await fetchMovies(`/movie/${movieId}/videos`,{language : "en-US"}) ;
      const trailer = data.results.find((vid) => vid.type === "Trailer" );
      if(trailer){
        setVideokey(trailer.key)
      }
    } catch (error) {
      console.error("trailer fetch faild",error)
    }
  }
  const msgHandler = () => {
    if (msg == "") {
      setMsg("Plese visit orginal Netflix page and Take subscribtion to watch full movie. ")
    }
   setTimeout(() => {
    setMsg("")
   }, 4000);
  };

  return (
    <div
    className=" bg-black w-full h-[500px] md:h-[95vh] bg-cover bg-center  relative text-white"
    style={{
      backgroundImage: movie ? url(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`) : "none",
    }}
  >
    {showTrailer && videoKey ? (
      <div className=" absolute inset-0 flex justify-center items-center bottom-1 bg-black z-50">
        <button 
        onClick={() => { SetShowTrailer(false)}}
        className=" absolute top-10 left-5 text-white  text-xl hover:bg-gray-400/50 bg-gray-400/10 px-4 p-2 rounded-full"
        >x </button>
        <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen ></iframe>
      </div>):(
    
    <div className=" relative">{children? children  : <div className=" absolute md:left-25 md:top-45 left-10 top-40 z-20"> 
      <div className=" text-lg md:text-5xl font-extrabold text-white">{movie.title}</div>
          <div className=" max-w-[350px]  md:max-w-[450px] text-[#f0f0f0] mt-3 md:mt-5">{textCutter( movie.overview, 100)}</div> 
          <div className="md:text-md text-sm text-gray-400 mt-2.5 md:mt-5 gap-8 flex">
            <div className=" flex items-center justify-center gap-1 "> Rating :  <FaRegStar className="transition-all block duration-100 scale-130 text-yellow-300 bg-yellow-300 hover:bg-yellow-300 hover:scale-150 " style={{
              clipPath:" polygon( 50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%,2% 35%,39% 35%)"
            }} />  <div>({Number(movie.vote_average).toFixed(1)}/10)</div></div>
            <div> Released : {movie.release_date}</div>
            </div> 
            <div className="flex  gap-5 md:gap-7 mt-6 md:items-center ">   
            <div className=" md:flex md:items-center gap-5 md:justify-center">
              {/* <img width="40px" height="20px" className=" brightness-80" src="public\youtube.png" alt="" /> */}
               <button className=" w-20 md:w-30 h-9 md:h-12 cursor-pointer rounded-md text-black hover:bg-stone-300/85 hover:text-gray-950 bg-white" onClick={ () => {
              SetShowTrailer(true)
            }}> <div className="md:text-[15px] text-[10px] flex justify-center gap-[6px]  items-center font-bold"> <div> <img width="12px" height="12px" src="/play.png" alt="▶" /></div> Play Now</div></button>
            </div>
            <div className="Custom-trans md:flex justify-center items-center gap-10"> <button className=" Custom-trans md:min-w-fit w-20 font-bold rounded-md cursor-pointer text-stone-400/70 h-10 md:h-12  md:w-fit md:text-[15px] text-[10px] hover:bg-red-900/80 border-red-900 border-2 " onClick={msgHandler}> {  <p className="Custom-trans md:px-7">Full Movie</p> }</button> {msg? <div className="  px-7 text-stone-400/70 font-bold rounded-md flex justify-center text-[10px] md:text-[15px] items-center Custom-trans h-full w-full ">{msg} </div>: ""}</div>
            </div> 
      </div> || "Loading..." }</div>)}
  </div>

  )
}

export default Banner