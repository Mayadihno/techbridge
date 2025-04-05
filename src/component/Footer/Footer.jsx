import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="bg-[#303E4B] py-10 text-white">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-1 gap-12 md:flex md:justify-between">
            {/* About */}
            <div className="w-[40%]">
              <div className="flex items-center space-x-2">
                <div className="text-[#FF6300] newsreader font-bold text-2xl py-1">
                  Tech<span className="text-blue-600">Bridge</span>
                </div>
              </div>
              <p className="text-sm leading-9 text-white">
                TechBridge combines transformational consulting capabilities,
                deep industry knowledge, and AI and technology expertise to
                deliver valuable customer experiences and accelerated growth
                across a broad range of industries worldwide.
              </p>
            </div>

            {/* Explore */}
            <div className="w-[30%] ml-30">
              <h4 className="text-xl font-semibold mb-4">Explore</h4>
              <ul className="space-y-4 text-gray-300 text-base font-semibold">
                <li className="hover:text-white cursor-pointer transition">
                  Home
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Solutions
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Articles
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Events
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="w-[30%]">
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <button
                onClick={() => navigate("/contact")}
                className="mt-2 cursor-pointer border border-blue-500 hover:bg-blue-700 hover:text-white text-blue-400 font-semibold uppercase px-6 py-2 rounded-full transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
