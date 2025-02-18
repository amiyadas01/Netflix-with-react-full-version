/* eslint-disable react/prop-types */
const MovieCard = ({ movie ,onSelect,index}) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div onClick={() => onSelect(movie)} className="bg-gray-800 h-44 md:h-60  rounded-lg shadow-md z-50 relative text-white">
      <img
        src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : "https://via.placeholder.com/500"}
        alt={movie.title}
        className="w-full z-50 object-cover rounded-md"
      />
      <div className=" flex flex-row justify-center items-center ">
      {/* <h3 className="mt-2 text-[10px] text-wrap m-auto text-center font-bold">{movie.title?movie.title:movie.original_title}</h3> */}
      <p className="text-8xl font-bold absolute bottom-3 left-[-15%] outline-text text-black">{index < 10? index + 1:""}</p></div>
    </div>
  );
};

export default MovieCard;