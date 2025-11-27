import { CalendarDays, CircleHelp, HeartHandshake, House, Info, Store } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <footer className="bg-linear-to-r fixed z-50 bottom-0 left-0 right-0 from-sky-400 to-blue-400 text-white py-3 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex hidden flex-col md:flex-row justify-between">
          <div className="flex flex-1 flex-col">
            <h3 className="text-sm font-extrabold">Computer Science Department</h3>
            <p className="text-sky-100 text-sm">Shaping the future of technology</p>
          </div>
          <div className="md:border-s flex-1 text-end justify-end flex">
            <p className="text-sm">
              © 2025 Computer Science Society UniMak. <br></br><span className="font-extrabold">All rights reserved.</span>
            </p>
          </div>          
        </div>
        

        <div className="text-sm flex justify-around md:hidden">
          <Link to={"/"} className="flex flex-col items-center gap-0.5">
            <Store />
            <h2 className={`transition-all ${pathname === "/" && "bg-white px-2 text-sky-400 rounded-full font-black"}`}>Home</h2>
          </Link>
          <Link to={"/clubs"} className="flex flex-col items-center gap-0.5">
            <HeartHandshake />
            <h2 className={`transition-all ${pathname.includes("/clubs") && "bg-white px-2 text-sky-400 rounded-full font-black"}`}>Clubs</h2>
          </Link>
          <Link to={"/events"} className="flex flex-col items-center gap-0.5">
            <CalendarDays />
            <h2 className={`transition-all ${pathname.includes("/events") && "bg-white px-2 text-sky-400 rounded-full font-black"}`}>Events</h2>
          </Link>
          <Link to={"/about"} className="flex flex-col items-center gap-0.5">
            <Info />
            <h2 className={`transition-all ${pathname === "/about" && "bg-white px-2 text-sky-400 rounded-full font-black"}`}>About</h2>
          </Link>
        </div>
      </div>
    </footer>
  );
}