import AllMovies from "../components/AllMovies"
import Banner from "../components/Banner"
import MovieList from "../components/MoviesList"
import { useState } from "react"
import { FaChevronRight } from "react-icons/fa"


function Dashboard() {
  const [selectedMovie,setSelectedMovie] = useState(null)
  const[showAllMovie,setShowAllMovie] = useState(
    {
      trending:false ,
      popular:false,
      horror:false,
      superhero:false,
      scifi:false,
    }
  )
  const toggleShowMovies = (section) => {
      setShowAllMovie ((prev) =>({
         ...prev,
        [section]: !prev[section]
      }))
  }
  return (
    <>
    <div className="m-0  relative">
    <div className=" absolute  w-full z-2 h-full bg-gradient-to-r from-black via-black/50 to-black/10"></div>
    <div className=" absolute bottom-[-5%] w-full z-0 h-full bg-gradient-to-r from-transparent via-blue-600/30 to-transparent blur-xl"></div>
    <Banner category ="/discover/movie?with_genres=28,12,878" className="2xl:h-[75vh]" selectedMovie={selectedMovie} />
       <div className=" absolute h-1 w-full z-2 bg-gradient-to-r from-pink-700/50 via-red-600 to-pink-700/50 bottom-0 left-0 rounded-[10%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
       </div>
       <div  className="z-1 pt-8 w-full Custom-trans h-fit m-auto relative">
      <div className="md:text-2xl text-xl m-auto Custom-trans w-[90%] flex justify-between "><div className="font-medium  p-0 m-0">Trending Now</div> <button className="p-0 m-0 px-4 py-2 w-auto  items-center flex gap-4 rounded-sm md:text-[20px] text-[15px] cursor-pointer bg-gray-950/20 hover:bg-gray-500/50" onClick={()=> toggleShowMovies("trending")}>{showAllMovie.trending? "Go Back" :"See All"} {!showAllMovie.trending && <span><FaChevronRight className=" w-2"/></span>} </button> </div>
      <div className="  ">{showAllMovie.trending? <AllMovies category="/trending/all/week" onMovieSelect={setSelectedMovie}/> :<MovieList  category ="/trending/all/week" number={false} onMovieSelect={setSelectedMovie}/>}</div>
      <div className=" absolute h-[2px] w-full z-2 bg-gradient-to-r from-[#282828] via-[#1e2939] to-[#282828] bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
       <div className="z-1 pt-5 h-fit w-full m-auto relative">
       <div className="md:text-2xl text-xl m-auto w-[90%] flex justify-between"><div className="font-medium p-0 m-0">Popular Movies</div> <button className="p-0 m-0 px-4 py-2 w-auto  items-center flex gap-4 rounded-sm md:text-[20px] text-[15px] cursor-pointer bg-gray-950/20 hover:bg-gray-500/50" onClick={()=> toggleShowMovies("popular")}>{showAllMovie.popular? "Go Back" :"See All"} {!showAllMovie.popular && <span><FaChevronRight className=" w-2"/></span>} </button> </div>
       <div className="">{showAllMovie.popular? <AllMovies category="/movie/popular" onMovieSelect={setSelectedMovie}/> :<MovieList category ="/movie/popular" number={false} onMovieSelect={setSelectedMovie}/>}</div>
      <div className=" absolute h-[2px] w-full z-2 bg-gradient-to-r from-[#282828] via-[#1e2939] to-[#282828] bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
       <div className="z-1 pt-5 h-fit w-full m-auto relative">
       <div className="md:text-2xl text-xl m-auto w-[90%] flex justify-between "><div className="font-medium p-0 m-0">Horror Movies</div> <button className="p-0 m-0 px-4 py-2 w-auto items-center flex gap-4 rounded-sm md:text-[20px] text-[15px] cursor-pointer bg-gray-950/20 hover:bg-gray-500/50" onClick={()=> toggleShowMovies("horror")}>{showAllMovie.horror? "Go Back" :"See All"} {!showAllMovie.horror && <span><FaChevronRight className=" w-2"/></span>} </button> </div>
      <div className="">{showAllMovie.horror? <AllMovies category="/discover/movie?with_genres=27" onMovieSelect={setSelectedMovie}/> :<MovieList category ="/discover/movie?with_genres=27" number={false} onMovieSelect={setSelectedMovie}/>}</div>
      <div className=" absolute h-[2px] w-full z-2 bg-gradient-to-r from-[#282828] via-[#1e2939] to-[#282828] bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
       <div  className="z-1 pt-5 h-fit w-full m-auto relative">
       <div className="md:text-2xl text-xl m-auto w-[90%] flex justify-between "><div className="font-medium p-0 m-0">Superhero Movies</div> <button className="p-0 m-0 px-4 py-2 w-auto  items-center flex gap-4 rounded-sm md:text-[20px] text-[15px] cursor-pointer bg-gray-950/20 hover:bg-gray-500/50" onClick={()=> toggleShowMovies("superhero")}>{showAllMovie.superhero? "Go Back" :"See All"} {!showAllMovie.superhero && <span><FaChevronRight className=" w-2"/></span>} </button> </div>
      <div className="">{showAllMovie.superhero? <AllMovies category="/discover/movie?with_genres=28,12,878" onMovieSelect={setSelectedMovie}/> :<MovieList category ="/discover/movie?with_genres=28,12,878" number={false} onMovieSelect={setSelectedMovie}/>}</div>
      <div className=" absolute h-[2px] w-full z-2 bg-gradient-to-r from-[#282828] via-[#1e2939] to-[#282828] bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
       <div  className="z-1 pt-5 h-fit w-full m-auto relative">
       <div className="md:text-2xl text-xl m-auto w-[90%] flex justify-between"><div className="font-medium p-0 m-0">Sci-Fi Movies</div> <button className="p-0 m-0 px-4 py-2 w-auto  items-center flex gap-4 rounded-sm md:text-[20px] text-[15px] cursor-pointer bg-gray-950/20 hover:bg-gray-500/50" onClick={()=> toggleShowMovies("scifi")}>{showAllMovie.scifi? "Go Back" :"See All"} {!showAllMovie.scifi && <span><FaChevronRight className=" w-2"/></span>} </button> </div>
      <div className="">{showAllMovie.scifi? <AllMovies category="/discover/movie?with_genres=878" onMovieSelect={setSelectedMovie}/> :<MovieList category ="/discover/movie?with_genres=878" number={false} onMovieSelect={setSelectedMovie}/>}</div>
      <div className=" absolute h-[2px] w-full z-2 bg-gradient-to-r from-[#282828] via-[#1e2939] to-[#282828] bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
      </div>
    </>
  )
}

export default Dashboard