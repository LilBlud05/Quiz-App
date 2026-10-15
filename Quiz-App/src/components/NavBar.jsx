import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='bg-orange-200 p-2 rounded-full backdrop-blur-3xl w-[50%] flex justify-center m-auto mt-4'>
        <ul className='flex gap-4 justify-around list-none w-100 font-bold text-2xl'>
            {/* <li 
            className='p-4 transition duration-200 hover:rounded-full hover:underline'><Link to="/">HOME</Link></li> */}
            <li className='p-4'>QUIZ APP🏆</li>
            {/* <li className='p-4'><Link to="/blog">BLOG</Link></li> */}
        </ul>
    </nav>
  )
}

export default NavBar;
