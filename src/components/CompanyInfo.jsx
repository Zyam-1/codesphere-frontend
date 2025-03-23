import React from "react";
import img1 from "./assets/c1.svg";
import img2 from "./assets/c2.svg";
import img3 from "./assets/c3.svg";

const features = [
  {
    title: "Awesome Team",
    description:
      "At CodeSphere, skilled professionals are joined under one team that delivers excellence because they hold strong passions for their work. Our organization ensures maximum project standards by bringing together experienced professionals who work with dedication and collaboration. The collective force drives innovative achievements along with successful outcomes.",
    img: img1,
  },
  {
    title: "Excellent Support",
    description:
      "CodeSphere prioritizes customer happiness by offering instant, dependable services that match each customer's needs. Our team is accessible to help and ensure your projects run smoothly. We demonstrate excellent service through open communication and find solutions to deliver better results.",
    img: img2,
  },
  {
    title: "Faster Performance",
    description:
      "The fundamental aspect of our work revolves around efficient operation. The team at CodeSphere implements modern techniques and methods to produce rapid delivery of exact, high-quality work outcomes. We fulfill every project timeline without reducing quality.",
    img: img3,
  },
];

export default function CompanyInfo() {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg ">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
