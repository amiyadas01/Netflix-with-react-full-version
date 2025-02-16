/* eslint-disable react/prop-types */
import { fetchMovies } from "../api/tmdb";
import { useEffect, useState } from "react";
import MovieCard from "./MoviesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow,Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";

const MovieList = ({category,onMovieSelect }) => {
  const [movies, setMovies] = useState([]);
  const prevBtnId = `prevBtn-${category.replace(/\W/g, '')}`
  const nextBtnId =`nextBtn-${category.replace(/\W/g, '')}`

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
    <div className="w-full  m-auto mx-auto my-auto relative ">

      <button className="absolute w-20 md:w-70 h-80  md:h-70 top-0 z-10  text-white " id={prevBtnId}>
        
      </button>
      <button className="absolute w-20 md:w-70 h-80 md:h-70 right-0 top-0 z-10 text-white " id={nextBtnId}>
        
      </button>


<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={1}
        loop={true}
        loopAdditionalSlides={5}
        autoplay ={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 10,
          modifier: 20,
          slideShadows: false,
        }}
        navigation={{ nextEl: `#${nextBtnId}`, prevEl: `#${prevBtnId}` }}
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
       
        touchAngle={40}
      >

      {movies.map((movie ,index) => (
        <SwiperSlide key={movie.id} className="relative w-full">
        {({isActive}) =>(
          <motion.div
            initial={{ scale: 0.9, opacity: 1 }}
            animate={{
              scale: isActive ? .99 : 0.9,
              opacity:isActive? 1 : 0.99,
            }}
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden ml-10 md:h-auto w-30 md:w-42 rounded-xl top-10 shadow-lg ${
              !isActive? "blur-[1.6px]" : ""
            }`}
          >
            <div className="  "><MovieCard  movie={movie} index ={index} onSelect={() => onMovieSelect(movie)} /></div>
          </motion.div>
        )}
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
};

export default MovieList;