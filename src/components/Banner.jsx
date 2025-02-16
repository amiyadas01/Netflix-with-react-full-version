/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmdb";
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
    className=" bg-black w-full h-[500px] md:h-[600px] bg-cover bg-center  relative text-white"
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
    
    <div className=" relative">{children? children  : <div className=" absolute left-25 top-45 z-20"> 
      <div className=" text-5xl font-extrabold text-stone-400">{movie.title}</div>
          <div className=" max-w-[450px] text-[#aeaeaeb1] mt-5">{textCutter( movie.overview, 100)}</div> 
          <div className="text-md text-gray-400 mt-5 gap-5 flex">
            <div> IMDB : ⭐ ({Math.round(movie.vote_average)}/10)</div>
            <div> Popularity : {movie.popularity}</div>
            </div> 
            <div className="flex gap-7 mt-6 items-center ">   
            <div className=" flex items-center gap-5 justify-center">
              {/* <img width="40px" height="20px" className=" brightness-80" src="public\youtube.png" alt="" /> */}
               <button className=" w-25  h-10 cursor-pointer rounded-md text-black  bg-stone-400" onClick={ () => {
              SetShowTrailer(true)
            }}> <div className="text-md flex justify-center gap-[6px]  items-center font-medium"> <div> <img width="12px" height="12px" src="/play.png" alt="▶" /></div> Play Now</div></button>
            </div>
            <div className="Custom-trans"> <button className=" Custom-trans max-w-auto font-bold rounded-md cursor-pointer text-stone-500/30 h-15  bg-red-900/40 " onClick={msgHandler}> {msg? <div className="  px-7 text-stone-300 font-bold rounded-md flex justify-center items-center Custom-trans h-full w-full bg-red-800">{msg} </div> : <p className="Custom-trans px-7">Full Movie</p> }</button></div>
            </div> 
      </div> || "Loading..." }</div>)}
  </div>

  )
}

export default Banner