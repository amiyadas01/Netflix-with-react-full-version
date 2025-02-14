import Banner from "../components/Banner"
import MovieList from "../components/MoviesList"


function Dashboard() {
  return (
    <>
    <div className="m-0"> <Banner/></div>
   <div>top trending</div>
   <div>
    <MovieList/></div>
    </>
  )
}

export default Dashboard