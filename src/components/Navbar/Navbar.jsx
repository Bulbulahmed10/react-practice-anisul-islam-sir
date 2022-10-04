import React from 'react'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className='nav_link'>Home</NavLink>
      <NavLink to="/blogs" className='nav_link'>Blogs</NavLink>
      <NavLink to="/contact" className='nav_link'>Contact</NavLink>
    </nav>
  )
}

export default Navbar