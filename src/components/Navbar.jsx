import {Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import { useLocation } from "react-router-dom";


function Navbar() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  }


  return (
    <div className='w-full h-22 absolute top-0 z-30 '>

      <nav className=' md:w-full h-full  justify-around gap-1 sm:gap-9 md:gap-70 lg:gap-80 items-center mx-auto   flex '>
        <div className='  text-xl md:text-4xl text-red-600 font-bold z-10'><Link to={location.pathname === "/dashboard" || location.pathname === "/account" ? "/dashboard":"/" }><div className=' w-[130px] md:w-[160px] p-5 md:p-0'><img src="/logo.svg" alt="Logo"/></div></Link></div>
        <div className=' flex justify-center items-center gap-3'>
          <div className='md:block hidden'>{location.pathname === "/" && !user && (
            <div className='w-32 h-9 gap-16 m-auto bg-black/30 bg  flex justify-center relative items-center rounded-sm focus:ring-1 focus:border-2'>
              <div role="img" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" aria-hidden="true"><path d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg></div>
            <select className='  bg-black/30 border-[1px] border-gray-400 absolute px-9 py-1 rounded-sm text-white appearance-none cursor-pointer ' name="Language" id="select lang">
              <option className='bg-white text-black appearance-none cursor-pointer ' value="English">English</option>
              <option className='bg-white text-black appearance-none cursor-pointer ' value="Hindi">हिन्दी</option>
            </select>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CaretDownSmall" aria-hidden="true"><path d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" fill="currentColor"></path></svg>
            </div>
            </div>
            )}</div>
          <div>{location.pathname === "/dashboard" && user && (
            <div className='w-auto h-auto  m-auto text-glow text-[16px] md:text-lg pb-1 md:pb-2   font-medium '> <Link to="/account"> Account</Link> </div>
            )}</div>
          <div className='w-[ 80px] '> {location.pathname === "/" && !user && (
            <Link to= "/login"><Button className='w-[80px] text-[15px] text-nowrap cursor-pointer h-[32px] font-medium hover:bg-red-600 hover:scale-101 rounded-sm'>Log in </Button></Link>
            
            )} </div>
          <div className='w-[ 80px] '> {location.pathname === "/signup" && !user && (
             <Link to= "/login"><Button className='w-[80px] text-[15px] text-nowrap cursor-pointer h-[32px] font-medium hover:bg-red-600 hover:scale-101 rounded-sm'>Log in </Button></Link>

            )} </div>
          <div className='w-[ 80px]  '> {location.pathname === "/login" && !user && (
             <Link to= "/signup"><Button className='w-[80px] cursor-pointer text-[15px] text-nowrap h-[32px] font-medium hover:bg-red-600 hover:scale-101 rounded-sm'>Sign up </Button></Link>

            )} </div>
          <div onClick={handleLogout} className='w-[ 80px]'> {user && (
            <Button className=' w-14 md:w-[80px] text-[10px] md:text-[15px] text-nowrap font-medium h-[25px] md:h-[30px] hover:bg-red-600 hover:scale-101  rounded-sm'>Sign out </Button>
             )}</div>
        </div>
      </nav>
      {/* <ul className='flex gap-3 max-w-[50%] m-auto absolute right-0'>
    <Link to="/" > <li>Home</li></Link>
      <Link to="/login" ><li>login </li></Link>
     <Link to="/dashboard" > <li>Dashboard</li></Link>
      <Link to="/signup" ><li>signup</li></Link>
      <li className=' cursor-pointer' onClick={handleLogout}>logout</li>
      </ul> */}
      
      </div>
  )
}

export default Navbar;