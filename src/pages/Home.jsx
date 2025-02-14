import MovieList from "../components/MoviesList"
import Banner from "../components/Banner"

function Home() {
  return (
    <div>
      <div className=" m-0"><Banner/></div>
      <div className="h-20">Home</div>
      
      <div className="z-10"><MovieList/></div>
      
    </div>
  )
}

export default Home