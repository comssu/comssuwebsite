import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-400 to-blue-400 text-white py-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Computer Science Department</h3>
            <p className="text-sky-100">Shaping the future of technology</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="/" className="hover:text-sky-200 transition-colors duration-300">
              Home
            </a>
            <a href="about" className="hover:text-sky-200 transition-colors duration-300">
              About
            </a>
            <a href="staff" className="hover:text-sky-200 transition-colors duration-300">
              Staff
            </a>
            <a href="club" className="hover:text-sky-200 transition-colors duration-300">
              Club
            </a>
            <a href="contact" className="hover:text-sky-200 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-sky-300 text-center">
          <p className="text-sm">
            © 2025 University Computer Science Department. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}