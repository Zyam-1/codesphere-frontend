import LoadingLine from "./LoadingLine";
import { useState } from "react";
import { motion } from "framer-motion";

import arrow from "./assets/arrow.svg";
import analytics from "./assets/analytics_chart_stats_statistics_6.svg";
import robot from "./assets/robot_artificial_intelligence_ai_science.svg";
import strategy from "./assets/strategy_plan_management.svg";
import openWhatsApp from "../utils";

const ServiceSection = () => {
  const services = [
    {
      title: "OBJECTIVE",
      text: "Our prime objective is to enhance your business’s online presence, generate more leads and drive relevant traffic to your website.",
      color: "#f4c542",
      // icon: "🎯",
      icon: arrow,
    },
    {
      title: "STRATEGY",
      text: "We build customized SEO strategies that balance keyword research, content optimization and link building so that your site ranks for the right terms.",
      color: "#f56565",
      // icon: "📊",
      icon: strategy,
    },
    {
      title: "TECHNOLOGY",
      text: "Using state-of-the-art tools and technology, we audit your website in minute detail, track the performance of your site, and provide an advanced technical solution.",
      color: "#63b3ed",
      // icon: "🤖",
      icon: robot,
    },
    {
      title: "ANALYTICS",
      text: "Our deep analytics give you a sense of how your SEO is performing, which means we make sure that you are getting the absolute most from your investment.",
      color: "#48bb78",
      // icon: "📈",
      icon: analytics,
    },
  ];

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className="container mx-auto p-12 md:p-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold">
        Affordable Services Packages
      </h2>
      <LoadingLine />

      <p className="text-center text-lg md:text-xl text-gray-600 mt-4">
        Get the results you need without spending a fortune! Our low-cost SEO
        service packages are designed in line with your budget but intensify
        maximum impact.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-14 mt-12">
        {services.map((service, index) => (
          <div
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            key={index}
            className="flex flex-col items-center text-center"
          >
            <div
              className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-full"
              style={{ backgroundColor: service.color }}
            >
              <img width="100%" src={service.icon} alt={service.title}></img>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mt-4">
              {service.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mt-2">
              {service.text}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWhatsApp}
          // textAlignment="center"
          className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-teal-600"
        >
          GET STARTED
        </motion.button>
      </div>
    </div>
  );
};

export default ServiceSection;
