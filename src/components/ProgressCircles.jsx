import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    percentage: 100,
    title: "Search Engine Optimization (SEO)",
    text: "Maximise your visibility in local searches with targeted SEO strategies designed to connect your business with nearby customers actively searching for your services.",
    color: "orange",
  },
  {
    percentage: 93,
    title: "Custom Software Development",
    text: "Tailored database design and optimization solutions that enhance performance, scalability, and data integrity for efficient business operations.",
    color: "green",
  },
  {
    percentage: 95,
    title: "Database Design and Optimization",
    text: "Expert custom software development tailored to your business needs—scalable, secure, and innovative solutions that drive growth and efficiency.",
    color: "orange",
  },
  {
    percentage: 97,
    title: "Paid Search Advertising",
    text: "Generate immediate results with PPC campaigns that focus on high-intent keywords, delivering targeted traffic and boosting conversions without delays.",
    color: "green",
  },
];

const AnimatedCircle = ({ percentage, color }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        strokeDashoffset: 440 - (440 * percentage) / 100,
        transition: { duration: 1 },
      });
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === percentage) clearInterval(interval);
      }, 10);
    }
  }, [inView, controls, percentage]);

  return (
    <div ref={ref} className="relative w-32 h-32 md:w-40 md:h-40">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 160 160"
        className="absolute"
      >
        <circle
          cx="80"
          cy="80"
          r="70"
          strokeWidth="10"
          stroke="#e0e0e0"
          fill="none"
        />
        <motion.circle
          cx="80"
          cy="80"
          r="70"
          strokeWidth="10"
          stroke={color}
          fill="none"
          strokeDasharray="440"
          strokeDashoffset="440"
          initial={{ strokeDashoffset: 440 }}
          animate={controls}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold">
        {count}%
      </span>
    </div>
  );
};

const ProgressCircles = () => {
  return (
    <div className="container mx-auto p-8 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-6 md:gap-10 p-6 md:p-10 bg-white rounded-lg"
          >
            <AnimatedCircle percentage={stat.percentage} color={stat.color} />
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold">
                {stat.title}
              </h3>
              <p className="text-md md:text-lg text-gray-600">{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressCircles;
