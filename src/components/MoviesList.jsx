import { fetchMovies } from "../api/tmdb";
import { useEffect, useState } from "react";
import MovieCard from "./MoviesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow,Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";



// eslint-disable-next-line react/prop-types
const MovieList = ({category}) => {
  const [movies, setMovies] = useState([]);
  const [activeIndex,setActiveIndex] = useState(0);

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
    <div className="w-full   mx-auto my-auto relative ">

      <button className="absolute w-20 md:w-70 h-80  md:h-70 top-0 z-10  text-white " id="prevBtn">
        
      </button>
      <button className="absolute w-20 md:w-70 h-80 md:h-70 right-0 top-0 z-10 text-white " id="nextBtn">
        
      </button>


<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={1}
        loop={true}
        autoplay ={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 3,
          slideShadows: false,
        }}
        navigation={{ nextEl: "#nextBtn", prevEl: "#prevBtn" }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        onSlideChange={(swiper) =>{
          setActiveIndex(swiper.realIndex)
        }}
        onMouseEnter={(e) => {
          
          e.target.swiper.autoplay.stop();
        }}
        onMouseLeave={(e) => {
          
          e.target.swiper.autoplay.start();
        }}
        modules={[EffectCoverflow , Navigation, Autoplay]}
        className="mySwiper"
        touchRatio={1}
        simulateTouch={true}
        touchStartPreventDefault ={false}
        mousewheel={ {forceToAxis : true,sensitivity:1}}
      >

      {movies.map((movie,index) => (
        <SwiperSlide key={movie.id} className="relative w-full">
        
          <motion.div
            initial={{ scale: 0.8, opacity: 1 }}
            animate={{
              scale: index === activeIndex ? 1 : 0.9,
              opacity: index === activeIndex ? 1 : 0.99,
            }}
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden md:h-auto w-30 md:w-42 rounded-xl top-10 shadow-lg ${
              index !== activeIndex ? "blur-[1.6px]" : ""
            }`}
          >
            <div className="  "><MovieCard  movie={movie} /></div>
          </motion.div>
        
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
};

export default MovieList;