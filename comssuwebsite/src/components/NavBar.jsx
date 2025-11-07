// src/components/NavBar.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  const linkClass = ({ isActive }) =>
    isActive ? 'px-3 py-2 font-semibold text-pink-700' : 'px-3 py-2 text-gray-700'

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center gap-4 p-3">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About Us</NavLink>
        <NavLink to="/staff" className={linkClass}>Staff</NavLink>
        <NavLink to="/events" className={linkClass}>Events</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default NavBar
