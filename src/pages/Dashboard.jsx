import Banner from "../components/Banner"
import MovieList from "../components/MoviesList"
import { useState } from "react"


function Dashboard() {
  const [selectedMovie,setSelectedMovie] = useState(null)
  return (
    <>
    <div className="m-0 relative">
    <div className=" absolute w-full z-2 h-full bg-gradient-to-r from-black via-black/50 to-black/10"></div>
    <div className=" absolute bottom-[-5%] w-full z-0 h-full bg-gradient-to-r from-transparent via-blue-600/30 to-transparent blur-xl"></div>
    <Banner category ="/discover/movie?with_genres=28,12,878" selectedMovie={selectedMovie} />
       <div className=" absolute h-1 w-full z-2 bg-gradient-to-r from-pink-700/50 via-red-600 to-pink-700/50 bottom-0 left-0 rounded-[10%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
       </div>
       <div id="trending-sec" className="z-1 mt-20 w-full m-auto relative">
      <div className="text-2xl m-auto w-fit font-medium">Trending Now</div>
      <div className=" pb-20 "><MovieList category ="/trending/all/week" onMovieSelect={setSelectedMovie}/></div>
      <div className=" absolute h-[2px] w-full z-2 bg-gradient-to-r from-[#282828] via-[#1e2939] to-[#282828] bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
       <div id="trending-sec" className="z-1 mt-20 w-full m-auto relative">
      <div className="text-2xl m-auto w-fit font-medium">Popular Movies</div>
      <div className=" pb-20"><MovieList category ="/movie/popular" onMovieSelect={setSelectedMovie}/></div>
      <div className=" absolute h-[2px] w-full z-2 bg-gradient-to-r from-[#282828] via-[#1e2939] to-[#282828] bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
       <div id="trending-sec" className="z-1 mt-20 w-full m-auto relative">
      <div className="text-2xl m-auto w-fit font-medium">Horror Movie</div>
      <div className=" pb-20"><MovieList category ="/discover/movie?with_genres=27" onMovieSelect={setSelectedMovie}/></div>
      <div className=" absolute h-[2px] w-full z-2 bg-gradient-to-r from-[#282828] via-[#1e2939] to-[#282828] bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
       <div id="trending-sec" className="z-1 mt-20 w-full m-auto relative">
      <div className="text-2xl m-auto w-fit font-medium">SuperHero Genres</div>
      <div className=" pb-20"><MovieList category ="/discover/movie?with_genres=28,12,878" onMovieSelect={setSelectedMovie}/></div>
      <div className=" absolute h-[2px] w-full z-2 bg-gradient-to-r from-[#282828] via-[#1e2939] to-[#282828] bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
       <div id="trending-sec" className="z-1 mt-20 w-full m-auto relative">
      <div className=" text-2xl m-auto w-fit font-medium">Sci-Fi Movies</div>
      <div className=" pb-20"><MovieList category ="/discover/movie?with_genres=878" onMovieSelect={setSelectedMovie}/></div>
      <div className=" absolute h-[2px] w-full z-2 bg-gradient-to-r from-[#282828] via-[#1e2939] to-[#282828] bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
    </>
  )
}

export default Dashboard