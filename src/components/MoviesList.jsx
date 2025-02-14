import { fetchMovies } from "../api/tmdb";
import { useEffect, useState } from "react";
import MovieCard from "./MoviesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow,Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";



const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies("/discover/movie", { language: "en-US", page: 1 });
        setMovies(data.results);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    getMovies();
  }, []);
  
  return (
    <div className="w-full   mx-auto my-auto relative ">
      <button className="absolute w-70  h-70 top-0 z-10  text-white " id="prevBtn">
        
      </button>
      <button className="absolute w-70 h-70 right-0 top-0 z-10 text-white " id="nextBtn">
        
      </button>


<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay ={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        navigation={{ nextEl: "#nextBtn", prevEl: "#prevBtn" }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        onMouseEnter={(e) => {
          
          e.target.swiper.autoplay.stop();
        }}
        onMouseLeave={(e) => {
          
          e.target.swiper.autoplay.start();
        }}
        modules={[EffectCoverflow , Navigation, Autoplay]}
        className="mySwiper"
      >

      {movies.map((movie) => (
        <SwiperSlide key={movie.id} className="relative">
        {({ isActive }) => (
          <motion.div
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{
              scale: isActive ? 1.1 : 0.9,
              opacity: isActive ? 1 : 0.5,
            }}
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden w-44 rounded-xl top-10 shadow-lg ${
              !isActive ? "blur-sm" : ""
            }`}
          >
            <div className="  "><MovieCard  movie={movie} /></div>
          </motion.div>
        )}
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
};

export default MovieList;