/* eslint-disable react/prop-types */
import { fetchMovies } from "../api/tmdb";
import { useEffect, useState } from "react";
import MovieCard from "./MoviesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

const MovieList = ({ category, onMovieSelect, number }) => {
  const [movies, setMovies] = useState([]);
  const prevBtnId = `prevBtn-${category.replace(/\W/g, "")}`;
  const nextBtnId = `nextBtn-${category.replace(/\W/g, "")}`;

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies(category, {
          language: ["en-US","hi-IN","fr-FR","es-ES","ja-JP"],
          page: 1,
        });
        setMovies(data.results);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    getMovies();
  }, [category]);

  return (
    <div className="w-full  m-auto mx-auto my-auto relative ">
     <div className="relative w-full m-auto"> <button
        className="absolute w-5 md:w-8 h-25  md:h-30 m-auto cursor-pointer flex justify-center items-center top-7 sm-top-8 md:top-16 z-10 left-4  rounded-md bg-gray-950/75 hover:bg-gray-800/75 text-white "
        id={prevBtnId}
      > <FaArrowLeft className="" /></button>
      <button
        className="absolute w-5 md:w-8 h-25 md:h-30 m-auto cursor-pointer flex justify-center items-center right-4 top-7 sm-top-8 md:top-16 z-10 rounded-md bg-gray-950/75 hover:bg-gray-800/75 hover text-white "
        id={nextBtnId}
      ><FaArrowRight className=""/> </button></div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={5}
        spaceBetween={-2}
        loop={true}
        loopAdditionalSlides={7}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 5,
          modifier: 20,
          slideShadows: false,
        }}
        navigation={{ nextEl: `#${nextBtnId}`, prevEl: `#${prevBtnId}` }}
        breakpoints={{
          200:{slidesPerView : 4},
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 6.5 },
          1536: {slidesPerView : 8}
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="mySwiper"
        touchAngle={40}
      >
        {movies.slice(0,10).map((movie, index) => (
          <SwiperSlide key={movie.id} className="relative  m-x-auto w-full ">
            {({ isActive }) => (
              <motion.div
                initial={{ scale: 0.9, opacity: 1 }}
                animate={{
                  scale: isActive ? 0.99 : 0.9,
                  opacity: isActive ? 1 : 0.99,
                }}
                transition={{ duration: 0.5 }}
                className={`relative  h-50 sm:h-60 md:h-70 lg:h-75 2xl:h-77  rounded-xl top-0 shadow-lg ${
                  !isActive ? "blur-[1.6px]" : ""
                }`}
              >
                  <MovieCard
                    movie={movie}
                    index={number === true ? index : <p></p>}
                    onSelect={() => onMovieSelect(movie)}
                  />
              </motion.div>
            )}
          </SwiperSlide>
        ))}
        {movies.slice(0,10).map((movie, index) => (
          <SwiperSlide key={movie.id} className="relative m-x-auto w-full ">
            {({ isActive }) => (
              <motion.div
                initial={{ scale: 0.9, opacity: 1 }}
                animate={{
                  scale: isActive ? 0.99 : 0.9,
                  opacity: isActive ? 1 : 0.99,
                }}
                transition={{ duration: 0.5 }}
                className={`relative   h-50 sm:h-60 md:h-70 lg:h-75 2xl:h-77 rounded-xl top-0 shadow-lg ${
                  !isActive ? "blur-[1.6px]" : ""
                }`}
              >
                  <MovieCard
                    movie={movie}
                    index={number === true ? index : <p></p>}
                    onSelect={() => onMovieSelect(movie)}
                  />
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
