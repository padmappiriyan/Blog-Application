import React from 'react';
import { FaHeart, FaCopyright } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg mt-auto">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2 text-white">
            <FaCopyright className="text-sm" />
            <span className="text-sm md:text-base">
              {currentYear} Blog Application Platform
            </span>
          </div>
          <span className="hidden md:inline text-white mx-3">|</span>
          <div className="flex items-center space-x-2 text-white">
            <span className="text-sm md:text-base">Made with</span>
            <FaHeart className="text-red-400 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;