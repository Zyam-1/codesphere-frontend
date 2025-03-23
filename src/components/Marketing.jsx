import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import offersImage from "./assets/offers1.png";
import openWhatsApp from "../utils";

const Marketing = () => {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">
          We Offer a Full Range of Digital Marketing Services!
        </h2>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Innovative digital marketing is in constant change. A strategic
            approach will keep you ahead of the curve, ensuring your business
            stays competitive.
          </p>
          <ul className="space-y-3">
            {[
              "Marketing Solutions Specially Designed for Businesses' Unique Requirements",
              "Data-Backed Successful Approaches Supported with Performance Records",
              "Adjustable Custom Plans Made for Your Business",
              "Experience Victory with Experts with Us",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-teal-500" size={20} /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-teal-600"
          onClick={openWhatsApp}
        >
          GET A QUOTE
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <img
          src={offersImage}
          alt="Digital Marketing Services"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Marketing;
