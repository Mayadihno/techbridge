import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navbarData } from "./data";
import { ICONS } from "../../static/icons";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white text-gray-900 p-4 sticky top-0 z-50 shadow-md w-full">
        <div className="md:w-[90%] w-[98%] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-gray-500 newsreader font-bold text-2xl md:px-3 md:py-1">
              <span className="text-[#FF6300]">Tech</span>
              <span className="text-blue-600">Bridge</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-9 text-lg font-semibold newsreader">
            {navbarData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "text-blue-500 border-b-[2px]"
                      : "text-black"
                  } text-lg font-semibold transition hover:text-[#FF6300]`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="newsreader hidden md:block">
            <button
              onClick={() => navigate("/contact")}
              className="border uppercase border-blue-500 hover:text-white cursor-pointer text-gray-500 hover:bg-blue-700 font-bold py-3 px-5 rounded-[30px] focus:outline-none focus:shadow-outline"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="focus:outline-none text-xl text-blue-600"
              onClick={() => setIsMenuOpen(true)}
            >
              <ICONS.menu size={30} />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black z-[999] transform transition-transform duration-700 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-3 flex justify-between items-center border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-gray-500 newsreader font-bold text-2xl">
              <span className="text-[#FF6300]">Tech</span>
              <span className="text-blue-600">Bridge</span>
            </div>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 hover:text-red-600"
          >
            <ICONS.close size={28} color="#fff" />
          </button>
        </div>

        <ul className="flex flex-col items-start space-y-6 p-6 text-xl font-semibold">
          {navbarData.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  location.pathname === item.path
                    ? "text-blue-500"
                    : "text-white"
                } hover:text-[#FF6300] transition`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/contact");
              }}
              className="mt-4 border border-blue-500 hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-6 rounded-full uppercase"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
