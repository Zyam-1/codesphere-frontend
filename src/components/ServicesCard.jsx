import { useState } from "react";
import slider1 from "./assets/slider1.png";
import slider2 from "./assets/slider2.png";
import slider3 from "./assets/slider3.png";
import slider4 from "./assets/slider4.png";
import LoadingLine from "./LoadingLine";

const services = [
  {
    title: "Full Services of Our Digital Agency",
    description:
      "Our digital agency offers a complete suite of services to help your business thrive online. From SEO and Local SEO to Custom Software Development, we craft strategies that drive growth and engagement.",
    button: "FREE CONSULTATION",
    bgColor: "bg-white",
    textColor: "text-black",
    isMain: true,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Boost your website’s visibility on search engines with our expert SEO strategies. Enhance rankings, drive traffic, and improve marketing.",
    bgColor: "bg-purple-500",
    image: slider1,
  },
  {
    title: "Software Development",
    description:
      "Expert custom software development tailored to your business needs—scalable, secure, and innovative solutions that drive growth and efficiency.",
    bgColor: "bg-blue-300",
    image: slider2,
  },
  {
    title: "Database Design/Optimization",
    description:
      "Tailored database design and optimization solutions that enhance performance, scalability, and data integrity for efficient business operations.",

    bgColor: "bg-orange-500",
    image: slider3,
  },
  {
    title: "Email Marketing",
    description:
      "Nurture your subscribers with personalized email campaigns that strengthen customer relationships and boost conversions.",
    bgColor: "bg-yellow-500",
    image: slider4,
  },
  {
    title: "PPC Management",
    description:
      "Run well-optimized, targeted ads that drive immediate results while maximizing your advertising pay-per-click campaigns.",
    bgColor: "bg-green-500",
    image: slider1,
  },
];

export default function ServicesCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={` flex flex-col justify-between p-6 rounded-2xl shadow-lg transition-all duration-500 transform ${
        service.isMain
          ? "bg-white"
          : hovered
            ? "bg-white scale-105"
            : service.bgColor
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Display image only if the card has one */}
      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-32 object-contain mx-auto"
        />
      )}

      <div>
        <h3 className="text-xl font-bold mt-4">{service.title}</h3>
        {service.isMain && <LoadingLine />}
        <p className="mt-2">{service.description}</p>
      </div>

      {service.button && (
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">
          {service.button}
        </button>
      )}
    </div>
  );
}
