import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#1f1f1f]">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Luxury<span className="text-yellow-500">.</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Discover timeless elegance with our exclusive
              collection of luxury watches crafted for those
              who appreciate perfection.
            </p>

            <div className="flex gap-4 mt-8">

              <div className="w-10 h-10 rounded-full bg-[#151515] hover:bg-yellow-500 hover:text-black duration-300 flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-10 h-10 rounded-full bg-[#151515] hover:bg-yellow-500 hover:text-black duration-300 flex items-center justify-center cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-10 h-10 rounded-full bg-[#151515] hover:bg-yellow-500 hover:text-black duration-300 flex items-center justify-center cursor-pointer">
                <FaXTwitter />
              </div>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link to="/" className="text-gray-400 hover:text-yellow-500 duration-300">
                Home
              </Link>

              <Link to="/about" className="text-gray-400 hover:text-yellow-500 duration-300">
                About
              </Link>

              <Link to="/products" className="text-gray-400 hover:text-yellow-500 duration-300">
                Products
              </Link>

              <Link to="/contact" className="text-gray-400 hover:text-yellow-500 duration-300">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3 items-center">
                <FaLocationDot className="text-yellow-500"/>
                <span>Baku, Azerbaijan</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaPhone className="text-yellow-500"/>
                <span>+994 50 123 45 67</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-yellow-500"/>
                <span>info@luxurywatch.com</span>
              </div>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-6">
              Subscribe to receive news and exclusive offers.
            </p>

            <input
              type="email"
              placeholder="Your email"
              className=" text-zinc-400 w-full bg-[#151515] rounded-xl p-4 outline-none border border-[#222] focus:border-yellow-500"
            />

            <button className="mt-4 w-full bg-yellow-500 text-black font-semibold py-4 rounded-xl hover:bg-yellow-400 duration-300">
              Subscribe
            </button>

          </div>

        </div>

        <div className="border-t border-[#1f1f1f] mt-16 pt-8 flex justify-between items-center flex-col md:flex-row gap-5">

          <p className="text-gray-500">
            © 2026 Luxury Watches. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="text-gray-500 hover:text-yellow-500 duration-300">
              Privacy
            </a>

            <a href="#" className="text-gray-500 hover:text-yellow-500 duration-300">
              Terms
            </a>

            <a href="#" className="text-gray-500 hover:text-yellow-500 duration-300">
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
