import React from "react";
import "../styles/HeroSection.css";
import Footer from "../components/Footer";
import RightSection from "../components/RightSection";
import LeftSection from "../components/LeftSection";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <LeftSection />
      <RightSection />
      <Footer />
    </div>
  );
};

export default HeroSection;
