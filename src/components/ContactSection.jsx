import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Get In Touch</h2>
        <div className="w-16 border-b-2 border-teal-500 mx-auto my-2"></div>
        <p className="text-gray-600 mt-2">
          Ready to boost your online presence? Get in touch with CodeSphere
          today and let our experts take your business to the next level!
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center justify-around gap-6">
        {/* Address */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 p-3 rounded-full">
            <MapPin className="text-teal-500" size={24} />
          </div>
          <div>
            <p className="text-gray-900 font-semibold">Office No. 42/E</p>
            <p className="text-gray-500 text-sm">
              Lane 6, Cavalry Ground, Gulberg III
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 p-3 rounded-full">
            <Mail className="text-teal-500" size={24} />
          </div>
          <div>
            <p className="text-gray-900 font-semibold">happifest16@gmail.com</p>
            <p className="text-gray-500 text-sm">Online support</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 p-3 rounded-full">
            <Phone className="text-teal-500" size={24} />
          </div>
          <div>
            <p className="text-gray-900 font-semibold">+351 920 335 888</p>
            <p className="text-gray-500 text-sm">Mon-Fri 9am-6pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
