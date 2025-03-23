import React from "react";
import Slider from "./Slider";
import Marketing from "./Marketing";
import Navbar from "./Navbar";
import Services from "./Services";
import TopMenu from "./TopMenu";
import ProgressCircles from "./ProgressCircles";
import ServiceSection from "./ServiceSection";
import Stats from "./Stats";
import HappyClients from "./HappyClients";
import BottomMenu from "./BottomMenu";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <TopMenu />
      <Navbar />
      <Slider />
      <Services />
      <Marketing />
      <ProgressCircles />
      <ServiceSection />
      <Stats />
      <HappyClients />
      <BottomMenu />
      <Footer />
    </div>
  );
};
export default Home;
