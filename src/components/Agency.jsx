import React from "react";
import TopMenu from "./TopMenu";
import Navbar from "./Navbar";
import BottomMenu from "./BottomMenu";
import Footer from "./Footer";
import Breadcrumb from "./BreadCrum";
import AboutCompany from "./AboutCompany";
import CompanySlider from "./CompanySlider";
import CompanyInfo from "./CompanyInfo";
import VisionInfo from "./VisionInfo";
import Testimonials from "./Testimonials";

const Agency = () => {
  let path = window.location.pathname;
  path = path.replace("/", "");
  return (
    <div>
      <TopMenu />
      <Navbar />
      <Breadcrumb path={path} color="#24fffc" heading="Our Agency" />
      <AboutCompany />
      <CompanySlider />
      <CompanyInfo />
      <VisionInfo />
      <Testimonials />
      <BottomMenu />
      <Footer />
    </div>
  );
};

export default Agency;
