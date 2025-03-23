import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EndLineImage from "./assets/company-EndLine.png";

const timelineData = [
  {
    year: 2023,
    title: "Company Founded",
    description: "Started as a small agency with a strong mission.",
    img: EndLineImage,
  },
  {
    year: 2023,
    title: "First Major Milestone",
    description: "Expanded our team and took on large-scale projects.",
    img: EndLineImage,
  },
  {
    year: 2024,
    title: "AI-Driven Strategies",
    description: "Implemented AI-driven strategies for better rankings.",
    img: EndLineImage,
  },
  {
    year: 2024,
    title: "International Expansion",
    description: "Started working with international clients worldwide.",
    img: EndLineImage,
  },
  {
    year: 2025,
    title: "Industry Leadership",
    description: "Recognized as a top agency in the region.",
    img: EndLineImage,
  },
];

export default function CompanySlider() {
  const [index, setIndex] = useState(4);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % timelineData.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6 text-center">
      {/* Timeline Navigation */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FaArrowLeft size={18} />
        </button>

        <div className="flex items-center gap-4">
          {timelineData.map((item, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-6 h-6 rounded-full border-2 transition ${
                index === i
                  ? "bg-teal-500 border-teal-500"
                  : "border-yellow-400 bg-white"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FaArrowRight size={18} />
        </button>
      </div>

      {/* Timeline Content */}
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex flex-col lg:flex-row items-center gap-6"
      >
        {/* Left: Image */}
        <img
          src={timelineData[index].img}
          alt={timelineData[index].title}
          className="w-70 h-70 object-contain"
        />

        {/* Right: Text */}
        <div className="text-left">
          <p className="text-gray-500">{timelineData[index].year}</p>
          <h2 className="text-2xl font-bold">{timelineData[index].title}</h2>
          <p className="text-gray-600">{timelineData[index].description}</p>
        </div>
      </motion.div>
    </div>
  );
}
