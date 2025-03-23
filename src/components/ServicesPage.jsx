import React from "react";
import TopMenu from "./TopMenu";
import Navbar from "./Navbar";
import BottomMenu from "./BottomMenu";
import Footer from "./Footer";
import Breadcrumb from "./BreadCrum";
import Services from "./Services";
import ServicesCards from "./ServicesCard";
const ServicesPage = () => {
  let path = window.location.pathname;
  path = path.replace("/", "");
  return (
    <div>
      <TopMenu />
      <Navbar />
      <Breadcrumb path={path} color="#24fe74" heading="Our Services" />
      <ServicesCards />
      <Services />
      <BottomMenu />
      <Footer />
    </div>
  );
};

export default ServicesPage;
