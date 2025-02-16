import Banner from "../components/Banner"
import MovieList from "../components/MoviesList"


function Dashboard() {
  return (
    <>
    <div className="m-0">
    <div className=" absolute w-full z-2 h-full bg-gradient-to-r from-black via-black/50 to-black"></div>
    <div className=" absolute bottom-[-5%] w-full z-0 h-full bg-gradient-to-r from-transparent via-blue-600/30 to-transparent blur-xl"></div>
    <Banner/>
       <div className=" absolute h-1 w-full z-2 bg-gradient-to-r from-pink-700/50 via-red-600 to-pink-700/50 bottom-0 left-0 rounded-[50%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
       </div>
   <div>top trending</div>
   <div>
    <MovieList category="/trending/all/week"/></div>
    </>
  )
}

export default Dashboard