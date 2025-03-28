// Author: Z. Maqsood
// Description: Navbar component for the Codesphere website
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa"; // Importing icons from react-icons
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let path = window.location.pathname;
  path = path.replace("/", "");
  // console.log(path);
  return (
    <nav
      className={`navbar bg-white shadow-md fixed w-full z-50 ${isSticky ? "sticky" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Section - Logo */}
        <div>
          <h1 className="text-2xl font-bold text-black">CODESPHERE</h1>
          <p className="text-sm text-gray-500">
            Tailored Tech, Delivered Simply
          </p>
        </div>

        {/* Center - Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li
            className={
              path === "home" || path === ""
                ? "text-teal-500 border-b-2 text-teal-500 border-b-2 border-teal-500 cursor-pointer"
                : " border-teal-500 cursor-pointer"
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              path === "services"
                ? "text-teal-500 border-b-2 text-teal-500 border-b-2 border-teal-500 cursor-pointer"
                : " border-teal-500 cursor-pointer"
            }
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            className={
              path === "agency"
                ? "text-teal-500 border-b-2 text-teal-500 border-b-2 border-teal-500 cursor-pointer"
                : " border-teal-500 cursor-pointer"
            }
          >
            <Link to="/agency">Our Agency</Link>
          </li>
          <li
            className={
              path === "contact-us"
                ? "text-teal-500 border-b-2 text-teal-500 border-b-2 border-teal-500 cursor-pointer"
                : " border-teal-500 cursor-pointer"
            }
          >
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>

        {/* Right Section - Search Icon & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <FaSearch className="text-gray-700 cursor-pointer" size={20} />
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden bg-white shadow-md"
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
          <li
            className={
              path === "home" || path === ""
                ? "text-teal-500 border-b-2 border-teal-500 cursor-pointer"
                : "border-teal-500 cursor-pointer"
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              path === "services"
                ? "text-teal-500 border-b-2 border-teal-500 cursor-pointer"
                : "border-teal-500 cursor-pointer"
            }
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            className={
              path === "agency"
                ? "text-teal-500 border-b-2 border-teal-500 cursor-pointer"
                : "border-teal-500 cursor-pointer"
            }
          >
            <Link to="/agency">Our Agency</Link>
          </li>
          <li
            className={
              path === "contact-us"
                ? "text-teal-500 border-b-2 border-teal-500 cursor-pointer"
                : "border-teal-500 cursor-pointer"
            }
          >
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
