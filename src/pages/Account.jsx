import Banner from "../components/Banner"
import { useAuth } from "../context/AuthContext"

function Account() {
  const {user} = useAuth();
  return (
    <div><div className="m-0 relative">
          <div className=" absolute w-full z-2 h-full bg-gradient-to-r from-black via-black/50 to-black/10"></div>
          <div className=" absolute bottom-[-5%] w-full z-0 h-full bg-gradient-to-r from-transparent via-blue-600/30 to-transparent blur-xl"></div>
          <Banner category ="/discover/movie?with_genres=28,12,878"> <div></div></Banner>
       <div className=" absolute h-1 w-full z-2 bg-gradient-to-r from-pink-700/50 via-red-600 to-pink-700/50 bottom-0 left-0 rounded-[10%] " style={{clipPath : "ellipse(50% 100% at 50% 100%)"}}></div>
       </div>
    <div className=" absolute left-10 top-28 md:left-20 md:top-45 z-20">
      <div className=" text-xl md:text-3xl font-extrabold text-white"> Account Details </div>
    <div className=" text-md md:text-3xl mt-10 font-extrabold gap-4 flex flex-row"><div>Email :</div> <div className="text-stone-400">{user.email}</div></div>
    </div>
    </div>
  )
}

export default Account