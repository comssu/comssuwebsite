import React from "react";
import homeImage from "../assets/bg-2.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-blue-100">

      <main className="flex-1 flex items-center justify-center relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-sky-300 rounded-full opacity-30"></div>
        
        <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-8">

          <div className="flex-1 max-w-2xl z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-black leading-tight">
              <span className="text-sky-600 block">Welcome to the </span>
              <span className="text-gray-900 block">Computer Science</span>
              <span className="text-gray-800 block">Official Website</span>
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                Learn More
              </Link>
              <Link
                to="/clubs"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-sky-600 font-bold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-sky-200 text-lg"
              >
                Explore Clubs
              </Link>
            </div>

          </div>

          <div className="flex-1 flex justify-end items-center z-10">
            <div className="relative">

              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                <img
                  src={homeImage}
                  alt="Department Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}