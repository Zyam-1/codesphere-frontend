import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import openWhatsApp from "../utils";
import { useNavigate } from "react-router-dom";
// Import your images here
import slider1 from "./assets/slider1.png";
import slider2 from "./assets/slider2.png";
import slider3 from "./assets/slider3.png";
import slider4 from "./assets/slider4.png";

const slides = [
  {
    title: "Custom Software Development",
    text: "Expert custom software development tailored to your business needs—scalable, secure, and innovative solutions that drive growth and efficiency.",
    image: slider1,
    button1: "Learn More",
    button2: "Get Started",
    color: "white",
  },
  {
    title: "Tailored Marketing Campaigns",
    text: "We create tailored marketing campaigns for each segment of your audience to help advertise products and services in efforts to efficiently and effectively engage new customers.",
    image: slider2,
    button1: "Learn More",
    color: "blue",
  },
  {
    title: "Social Media Marketing Services",
    text: "An effective social strategy can help you grow your business, maintain your social presence and engage with the audience.",
    image: slider3,
    button1: "Learn More",
    button2: "Get Started",
    color: "green",
  },
  {
    title: "Local SEO Services",
    text: "Increase your visibility, attract nearby customers, and grow your business with powerful local SEO solutions.",
    image: slider4,
    button1: "Learn More",
    button2: "Our Services",
    color: "yellow",
  },
];

const Slider = () => {
  const swiperRef = useRef(null);
  let navigate = useNavigate();

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="w-full">
      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000 }}
        className="w-full h-[700px]"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-between w-full h-full p-10 bg-green-400">
              {/* Animated Text Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-1/2 text-white"
              >
                <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="mb-4">{slide.text}</p>
                <div className="flex gap-4">
                  <button
                    onClick={openWhatsApp}
                    className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
                  >
                    {slide.button1}
                  </button>
                  {slide.button2 && (
                    <button
                      onClick={() => {
                        navigate("/services");
                      }}
                      className="bg-white text-black px-4 py-2 rounded-md cursor-pointer"
                    >
                      {slide.button2}
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Animated Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-1/2"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Clickable Navigation Section */}
      <div className="flex flex-wrap md:flex-nowrap justify-center text-white text-center">
        <div
          className="w-full md:w-1/4 p-6 bg-gray-100 cursor-pointer hover:opacity-80"
          onClick={() => goToSlide(0)}
        >
          <h2 className="text-black">Custom Software Development</h2>
        </div>
        <div
          className="w-full md:w-1/4 p-6 bg-teal-400 cursor-pointer hover:opacity-80"
          onClick={() => goToSlide(1)}
        >
          <h2>Marketing Campaigns</h2>
        </div>
        <div
          className="w-full md:w-1/4 p-6 bg-orange-500 cursor-pointer hover:opacity-80"
          onClick={() => goToSlide(2)}
        >
          <h2>Social Media Marketing</h2>
        </div>
        <div
          className="w-full md:w-1/4 p-6 bg-green-500 cursor-pointer hover:opacity-80"
          onClick={() => goToSlide(3)}
        >
          <h2>Local SEO</h2>
        </div>
      </div>
    </div>
  );
};

export default Slider;
