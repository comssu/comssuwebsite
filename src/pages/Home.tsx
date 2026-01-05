import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col fixed top-0 bottom-0 left-0 right-0 bg-cover">
        <div className="absolute inset-0 bg-[url('/images/mainbg.jpg')] bg-cover"></div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/30 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-sky-300/30 rounded-full opacity-30"></div>
        
        <div className="z-10 w-full md:pt-15 flex lg:flex-row flex-col justify-center lg:justify-between items-center gap-5 h-full max-w-250 mx-auto px-10">

          <div className="max-w-2xl z-10 flex flex-col gap-4">
            <h1 className="text-3xl text-center font-black md:text-4xl lg:text-5xl leading-tight">
              <span className="text-sky-600 block text-center">Welcome to the </span>
              <span className="text-gray-900 block text-center">Computer Science</span>
              <span className="text-gray-800 block text-center">Official Website</span>
            </h1>

            <div className="max-w-120 hidden lg:flex text-center text-sm p-4 rounded-3xl text-white bg-linear-to-br from-amber-400 to-amber-600 shadow-sm -mt-1">The Computer Science Department at the University of Makeni stands as a beacon of technological excellence and innovation.</div>
            
            <div className="flex justify-center items-center gap-2 mb-3">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-4 py-3 sm:px-3 sm: bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full shadow-sm hover:shadow-md transform transition-all duration-300 md:text-xl md:px-6"
              >
                Learn More
              </Link>
              <Link
                to="/clubs"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-3 bg-white hover:bg-gray-50 text-sky-600 font-bold rounded-full shadow-sm hover:shadow-md transform transition-all duration-300 border border-sky-200 md:text-xl md:px-6"
              >
                Explore Clubs
              </Link>
            </div>
            <img src="/images/grouppic.jpg" className="rounded-3xl shadow-sm lg:hidden max-w-100 w-full transform md:rotate-3 hover:rotate-0 transition-transform" />
          </div>

          <div className="w-[80%] max-w-80 lg:max-w-96 aspect-square rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-none hidden lg:flex">
            <img
              src="/images/bg-2.png"
              alt="Department Building"
              className="w-full h-full object-cover shadow-sm"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


export default Home;