import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1c1f23] text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold">CodeSphere !</h2>
          <div className="w-16 h-1 bg-teal-400 mt-2 mb-4"></div>
          <p className="text-gray-400 text-sm leading-relaxed">
            At CodeSphere, we have over 8 years of experience and a track record
            of serving 150+ clients. Our commitment to excellence and attention
            to detail ensures that every project we undertake is completed to
            the highest standard. We pride ourselves on our ability to build
            lasting relationships with our clients, always striving for customer
            satisfaction and innovation.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-400 text-xl">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl font-semibold">Services Provided</h2>
          <div className="w-16 h-1 bg-teal-400 mt-2 mb-4"></div>
          <div className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
            <p>▶ Custom Software Development</p>
            <p>▶ Database Optimization</p>
            <p>▶ Application Optimization</p>
            <p>▶ Software Maintenance</p>
            <p>▶ Social Media</p>
            <p>▶ Search Engine Optimization</p>
            <p>▶ Mobile App Development</p>
            <p>▶ Content Management</p>
            <p>▶ Web Development</p>
            <p>▶ Blog Managemen</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-orange-400" />
          <span>+351 920 335 888</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-orange-400" />
          <span>happifest16@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-orange-400" />
          <span>42/E, Lane 6, Cavalry Ground, Gulberg III, Lahore, 54560</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
