import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TopMenu = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      <span className="text-sm md:text-base border-b border-dotted border-gray-400 pb-1">
        info@codesphere.com
      </span>
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <span className="text-gray-400 text-sm">Follow us:</span>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaLinkedinIn />
        </a>
      </div>
    </header>
  );
};

export default TopMenu;
