import React from 'react'
import {Link, NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className='navLink'>Home</NavLink>
      <NavLink to="/blogs" className='navLink'>Blogs</NavLink>
      <NavLink to="/contact" className='navLink'>Contact</NavLink>
    </nav>
  )
}

export default Navbar