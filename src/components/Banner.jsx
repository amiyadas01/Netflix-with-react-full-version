/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmdb";


function Banner({children}) {
  
  const [movie, setMovie] = useState("");
const url = (url) => `url(${url})`;
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies("/discover/movie", { language: "en-US", page: 1 });
        if (data.results.length > 0) {
          const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
          setMovie(randomMovie);
        }

      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    getMovies();
  }, []);

  return (
    <div
    className=" bg-black w-full h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center relative text-white"
    style={{
      backgroundImage: movie ? url(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`) : "none",
    }}
  >
    {/* <div className=" absolute w-full h-full bg-gradient-to-r from-black via-transparent to-black"></div> */}
    <div className="text-3xl absolute font-bold">{children? children  : movie.title || "Loading..." }</div>
  </div>

  )
}

export default Banner