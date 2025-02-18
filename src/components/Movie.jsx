/* eslint-disable react/prop-types */
const Movie = ({ movie, onSelect }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  
    return (
      <div 
        onClick={() => onSelect(movie)} 
        className="bg-gray-800 items-center cursor-pointer h-[300px]   relative hover:scale-105 transition-all duration-300 rounded-lg shadow-md"
      >
        
        <img
          src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : "https://via.placeholder.com/500"}
          alt={movie.title}
          className="w-full h-full object-cover rounded-md"
        />
  
        {/* Movie Details */}
        {/* <div className="ml-4 flex justify-center absolute bottom-1 left-1 items-center flex-col"> */}
          {/* <h3 className="text-[10px] font-bold ">{movie.title}</h3> */}
          {/* <p className="text-sm text-gray-400">{movie.overview?.slice(0, 100)}...</p> */}
        {/* </div> */}
      </div>
    );
  };
  
  export default Movie;