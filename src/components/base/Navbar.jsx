
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import ProductDrawer from "../ProductDrawer";
import logo from "../../assets/logo.png.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-[#141414] to-black border-b-2 border-yellow-500 shadow-lg shadow-yellow-500/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto hover:scale-105 transition duration-300"
          />
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[17px] font-medium">

          <Link to="/" className="text-gray-300 hover:text-yellow-400 transition">
            Home
          </Link>

          <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition">
            About
          </Link>

          <Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition">
            Contact
          </Link>

          <Link to="/products" className="text-gray-300 hover:text-yellow-400 transition">
            Products
          </Link>

        </div>


        {/* Icons */}
        <div className="flex items-center gap-4 text-2xl">

          <Link
            to="/auth/login"
            className="p-2 rounded-full text-yellow-400 hover:text-white hover:bg-yellow-500 transition-all duration-300"
          >
            <FaUser />
          </Link>


          <ProductDrawer />


          {/* Mobile Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-yellow-400 text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-[#111111] border-t border-yellow-500">


          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-gray-300 hover:text-yellow-400 hover:bg-[#1a1a1a]"
          >
            Home
          </Link>


          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-gray-300 hover:text-yellow-400 hover:bg-[#1a1a1a]"
          >
            About
          </Link>


          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-gray-300 hover:text-yellow-400 hover:bg-[#1a1a1a]"
          >
            Contact
          </Link>


          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-gray-300 hover:text-yellow-400 hover:bg-[#1a1a1a]"
          >
            Products
          </Link>


          <Link
            to="/auth/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:text-yellow-400 hover:bg-[#1a1a1a]"
          >
            <FaUser />
            Login
          </Link>


        </div>

      )}

    </nav>
  );
}

