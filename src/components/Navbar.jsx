import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='w-full h-7'>
      <ul className='flex gap-3 max-w-[50%] m-auto'>
    <Link to="/" > <li>Home</li></Link>
      <Link to="/login" ><li>login </li></Link>
     <Link to="/dashboard" > <li>Dashboard</li></Link>
      <Link to="/signup" ><li>signup</li></Link>
      </ul></div>
  )
}

export default Navbar;