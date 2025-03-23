import {
  MapPin,
  Map,
  Anchor,
  MonitorSmartphone,
  Brush,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <MapPin className="text-red-500" size={50} />,
    title: "Local Search Strategy",
    text: "Local Search Strategy puts your local business in front of the people in your community who want to find you!",
  },
  {
    icon: <Map className="text-yellow-500" size={50} />,
    title: "Custom Software Development",
    text: "Expert custom software development tailored to your business needs—scalable, secure, and innovative solutions that drive growth and efficiency.",
  },
  {
    icon: <Anchor className="text-teal-500" size={50} />,
    title: "Database Design/Optimization",
    text: "Tailored database design and optimization solutions that enhance performance, scalability, and data integrity for efficient business operations.",
  },
  {
    icon: <MonitorSmartphone className="text-blue-500" size={50} />,
    title: "Paid Search Advertising",
    text: "Immediate traffic and measurable results with targeted paid search advertising reaching the right customer at the right time.",
  },
  {
    icon: <Brush className="text-gray-500" size={50} />,
    title: "Custom Website Design",
    text: "Make a lasting impression with a beautifully crafted custom website designed to turn visitors into customers.",
  },
  {
    icon: <Mail className="text-yellow-400" size={50} />,
    title: "Custom Email Design",
    text: "Engage your audience with customized designs that include attractive visuals that drive conversion.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 p-8 bg-white rounded-lg transition h-[200px]"
          >
            {service.icon}
            <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
