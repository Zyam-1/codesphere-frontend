import React from "react";
import avatar1 from "./assets/avatar.png";
import avatar2 from "./assets/avatar3.png";

const testimonials = [
  {
    name: "Ibrahim Ahmed",
    position: "Client",
    avatar: avatar1,
    review:
      "From the very beginning, CodeSphere's professionalism, dedication, and expertise were evident. Seamless communication, attention to detail, and commitment to delivering high-quality results made the entire experience exceptional. We are extremely satisfied with the final outcome and look forward to future collaborations!",
  },
  {
    name: "Shiza Sohail",
    position: "Client",
    avatar: avatar2,
    review:
      "We had an excellent experience working with CodeSphere. Their expertise in software development was evident in every aspect of the project. Their problem-solving skills, professionalism, and commitment to quality significantly impacted the project’s success. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Our Customers Say
        </h2>
        <p className="text-teal-600 mt-1">Read All Testimonials →</p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg max-w-md flex-1 relative"
          >
            <p className="text-gray-700">{testimonial.review}</p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-gray-900 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
            <span className="absolute bottom-4 right-4 text-gray-300 text-4xl">
              ❝
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
