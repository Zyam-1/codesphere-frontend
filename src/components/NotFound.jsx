import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TopMenu from "./TopMenu";
import Navbar from "./Navbar";

export default function NotFound() {
  return (
    <div>
      <TopMenu />
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-green-500 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold">404</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl mt-2"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-teal-600 cursor-pointer"
          >
            GO HOME
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
