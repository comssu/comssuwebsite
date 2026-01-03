import { CalendarDays, HeartHandshake, Store, Users } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <footer className="bg-linear-to-r fixed z-50 bottom-0 left-0 right-0 from-sky-400 to-blue-400 text-white py-3 shadow-inner md:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <Link to={"/society"} className="flex flex-col items-center gap-0.5">
            <Users />
            <h2 className={`transition-all ${pathname === "/society" && "bg-white px-2 text-sky-400 rounded-full font-black"}`}>Society</h2>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;