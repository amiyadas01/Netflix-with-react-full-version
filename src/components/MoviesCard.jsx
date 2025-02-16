/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="bg-gray-800 h-50 md:h-auto p-4 mb-10 rounded-lg shadow-md z-50 text-white">
      <img
        src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : "https://via.placeholder.com/500"}
        alt={movie.title}
        className="w-full  md:h-44 object-cover rounded-md"
      />
      <h3 className="mt-2 text-[10px] font-bold">{movie.title}</h3>
      <p className="text-sm text-gray-400">⭐ {movie.vote_average.toFixed(1)}</p>
    </div>
  );
};

export default MovieCard;