import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Cpu, Drone, Gpu, MemoryStick, Microchip, Code } from "lucide-react";

const NavBar: React.FC = () => {

  const navigate = useNavigate();
  const [displayIcon, setDisplayIcon] = useState("Cpu");

  const linkClasses =
    "px-2 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-white font-semibold text-center";

  const icons = [ "Cpu", "Drone", "Gpu", "MemoryStick", "Microchip", "Code" ];

  setInterval(() => {
    const lastIndex = icons.length - 1;
    const currentIndex = icons.indexOf(displayIcon);
    const nextIndex = lastIndex === currentIndex ? 0 : currentIndex + 1
    setDisplayIcon(icons[nextIndex]);
  }, 3000);

  return (
    <nav className="flex fixed top-0 right-0 left-0 z-50 justify-center px-4">
      <div className="bg-linear-to-r from-sky-400 to-blue-400 h-13 text-white mx-auto shadow-sm mt-4 rounded-3xl w-full max-w-9xl relative flex justify-center items-center">
        <div className="flex w-full justify-between items-center px-2">
          <div className="flex items-center gap-4">
            <img
              src="/images/home.jpg"
              alt="Department Logo"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer"
              onClick={() => navigate("/")}
            />
        
          </div>

          <div className="md:hidden">
            {displayIcon === "Cpu" && <Cpu />}
            {displayIcon === "Gpu" && <Gpu />}
            {displayIcon === "MemoryStick" && <MemoryStick />}
            {displayIcon === "Drone" && <Drone />}
            {displayIcon === "Microchip" && <Microchip />}
            {displayIcon === "Code" && <Code />}
          </div>

          <div className="md:flex hidden rounded-3xl gap-2 text-sm">
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
              to="/society"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-sky-600 shadow-md" : "text-white"
                }`
              }
            >
              Society
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
          </div>
        </div>
      </div>
    </nav>
  );
}


export default NavBar;