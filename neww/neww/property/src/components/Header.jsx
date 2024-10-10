import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white mt-4 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Teja Builders</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/properties" className="text-gray-700 hover:text-gray-900">Properties</Link>
          <Link to="/about-us" className="text-gray-700 hover:text-gray-900">About Us</Link>
          <Link to="/contact-us" className="text-orange-500 hover:text-orange-600">Contact</Link>
        </nav>
        
        <button className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          Sign Up
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden shadow-lg py-4">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/properties" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Properties</Link>
          <Link to="/about-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact-us" className="block px-4 py-2 text-orange-500 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <button className="mx-4 mt-2 w-calc(100% - 2rem) bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>
            Sign Up
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;