import React from "react";
import { NavLink } from "react-router-dom";
import homeImage from "../assets/home.jpg";

export default function NavBar() {
  const linkClasses =
    "px-6 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-sky-600 font-semibold";

  return (
    <nav className="flex justify-center px-4">
      <div className="bg-gradient-to-r from-sky-400 to-blue-400 text-white p-1 mx-auto shadow-lg mt-4 rounded-3xl w-full max-w-9xl">
        <div className="flex justify-between items-center px-6">
          <div className="flex items-center gap-4">
            <img
              src={homeImage}
              alt="Department Logo"
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
        
          </div>

          <div className="flex space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-sky-600 shadow-md" : "text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-sky-600 shadow-md" : "text-white"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/clubs"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-sky-600 shadow-md" : "text-white"
                }`
              }
            >
              Clubs
            </NavLink>

            <NavLink
              to="/staff"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-sky-600 shadow-md" : "text-white"
                }`
              }
            >
              Staff
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-sky-600 shadow-md" : "text-white"
                }`
              }
            >
              Events
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-sky-600 shadow-md" : "text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}