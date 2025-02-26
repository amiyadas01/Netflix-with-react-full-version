import { useState } from "react";
import { FaRegStar } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Movie = ({ movie, onSelect }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
    const [ishover, setIshover] = useState(false)
  
    return (
      <div 
       
        className="bg-gray-800 items-center h-[280px] md:h-[240px]  lg:h-[320px] 2xl:h-[350px]  flex flex-col justify-center z-0  relative hover:scale-105 transition-all duration-300 rounded-lg shadow-md"
        onMouseEnter={()=>setIshover(true)}
        onMouseLeave={()=>setIshover(false)}
        onTouchStart={(e)=> {
          e.stopPropagation();
          setIshover(!ishover)}}
      >
        {ishover?  <img
          src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : "https://via.placeholder.com/500"}
          alt={movie.title}
          className=" transition-all absolute top-0 p-1 rounded-lg duration-300 w-full h-[50%] object-fill "
        /> : <img
          src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : "https://via.placeholder.com/500"}
          alt={movie.title}
          className="w-full h-full transition-all absolute top-0 duration-300 object-cover rounded-md"
        />}
        
       
        <div className="flex justify-center  items-left absolute left-5 bottom-16 -z-1 flex-col">
          <div className="text-[15px] font-bold ">{movie.title}</div>
          <div className=" flex items-center  gap-1 text-[10px] "><FaRegStar className="transition-all block duration-100 scale-130 text-yellow-300 bg-yellow-300 hover:bg-yellow-300 hover:scale-150 " style={{
              clipPath:" polygon( 50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%,2% 35%,39% 35%)"
            }} />  <div>({Number(movie.vote_average).toFixed(1)}/10)</div></div>
          <p className="text-[7px] pr-1 text-gray-400">{movie.overview?.slice(0, 150)}...</p>
        </div>
        <button className=" rounded-sm  h-6 absolute text-gray-400 font-bold -z-1 text-[12px] bottom-5 cursor-pointer "  onClick={() => onSelect(movie)} >click to play !</button>

      </div>
    );
  };
  
  export default Movie;