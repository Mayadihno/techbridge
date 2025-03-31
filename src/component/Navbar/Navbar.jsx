import React from "react";
import { Link } from "react-router-dom";
import { navbarData } from "./data";

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-900 p-4 shadow-md sticky w-full z-10">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-gray-500 newsreader font-bold text-2xl px-3 py-1">
            Tech<span className="text-blue-600">Bridge</span>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-9 text-lg font-semibold newsreader">
          {navbarData.map((item) => (
            <li key={item.id}>
              <Link to={item.path} className="hover:text-blue-500 transition">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="newsreader">
          <button className="border uppercase border-blue-500 hover:text-white cursor-pointer text-gray-500 hover:bg-blue-700 font-bold py-3 px-5 rounded-[30px] focus:outline-none focus:shadow-outline">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="focus:outline-none text-xl text-blue-600">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
