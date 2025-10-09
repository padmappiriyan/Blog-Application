import React, { useState } from 'react';
import { FiMenu, FiX, FiHome, FiGrid, FiTag, FiLogIn } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogin = () => {
           navigate('/login');
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 p-3">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
         
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blog Platform
            </h1>
          </div>

         
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-100 hover:scale-105"
            >
              <FiHome className="w-5 h-5" />
              Home
            </Link>
            <Link
              to="/categories"
              className="flex items-center gap-2 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            >
              <FiGrid className="w-5 h-5" />
              Categories
            </Link>
            <Link
              to="/tags"
              className="flex items-center gap-2 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            >
              <FiTag className="w-5 h-5" />
              Tags
            </Link>
          </div>

          {/* Log In Button - Desktop */}
          <div className="hidden md:block">
            <button className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={handleLogin}>
              <FiLogIn className="w-5 h-5" />
              Log In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-7 w-7" />
              ) : (
                <FiMenu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 transition-all duration-300">
            <div className="flex flex-col space-y-2 bg-gray-50 rounded-lg p-4">
              <Link
                to="/"
                className="flex items-center gap-3 text-blue-600 bg-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-50 shadow-sm"
              >
                <FiHome className="w-5 h-5" />
                Home
              </Link>
              <Link
                to="/ategories"
                className="flex items-center gap-3 text-gray-700 bg-white px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 shadow-sm"
              >
                <FiGrid className="w-5 h-5" />
                Categories
              </Link>
              <Link
                to="/tags"
                className="flex items-center gap-3 text-gray-700 bg-white px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 shadow-sm"
              >
                <FiTag className="w-5 h-5" />
                Tags
              </Link>
              <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <FiLogIn className="w-5 h-5" />
                Log In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
