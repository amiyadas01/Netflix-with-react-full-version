/* eslint-disable react/prop-types */
import { fetchMovies } from "../api/tmdb";
import { useEffect, useState } from "react";
// import MovieCard from "./MoviesCard";
import Movie from "./Movie";

const AllMovies = ({ category, onMovieSelect }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies(category, { language: "en-US", page: 1 });
        setMovies(data.results);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    getMovies();
  }, [category]);

  return (
    <div className="w-full mx-auto my-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
        {movies.map((movie) => (
          <div key={movie.id} className="w-full">
            <Movie movie={movie} onSelect={()=>onMovieSelect(movie)}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;