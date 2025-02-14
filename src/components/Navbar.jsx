import {Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const {logout} = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  }


  return (
    <div className='w-full h-7'>
      <ul className='flex gap-3 max-w-[50%] m-auto'>
    <Link to="/" > <li>Home</li></Link>
      <Link to="/login" ><li>login </li></Link>
     <Link to="/dashboard" > <li>Dashboard</li></Link>
      <Link to="/signup" ><li>signup</li></Link>
      <li className=' cursor-pointer' onClick={handleLogout}>logout</li>
      </ul></div>
  )
}

export default Navbar;