import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "They got our vision at once and started planning based on it. The team is responsive, knowledgeable, and genuinely wants to see our success. I couldn't be more pleased with the outcome!",
    name: "Shahab Ul Din Farooqi",
    position: "Lead Manager",
  },
  {
    text: "The dedication and expertise they brought to our project were outstanding. Every detail was handled with precision, and we achieved results beyond our expectations!",
    name: "Ayesha Khan",
    position: "Project Coordinator",
  },
  {
    text: "Professional, creative, and always willing to go the extra mile. Working with them was an absolute pleasure, and we look forward to future collaborations!",
    name: "Michael Smith",
    position: "Marketing Head",
  },
];

const HappyClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  return (
    <div className="bg-[#f5a623] flex justify-center items-center py-16 px-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-semibold text-black mb-2">
            Happy Clients About Us
          </h2>
          <div className="w-16 h-1 bg-yellow-300 mb-4"></div>
          <p className="text-white text-lg">
            See how we have made a difference for our clients!
          </p>
        </div>
        <div className="w-full md:w-2/3">
          <Slider {...settings} className="mt-8">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="bg-[#2c2c2c] p-8 text-white shadow-lg relative flex flex-col items-start max-w-2xl rounded-tl-full rounded-br-full rounded-tr-none rounded-bl-none transition-opacity duration-500">
                  <div className="absolute -top-6 left-4 bg-yellow-400 p-6 rounded-full flex items-center justify-center"></div>
                  <p className="mt-16 text-xl leading-relaxed">
                    {testimonial.text}
                  </p>
                  <h4 className="mt-6 font-semibold text-yellow-300 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
