import React from "react";
import Footer from "../components/Footer";
import "../styles/CampusPartner.css";

const CampusPage = () => {
  return (
    <div className="campus-container">
      <div className="content">
        <h1>Bring Blox to Your Campus</h1>
        <p>Be the Reason Your Campus Gets the Blox Buzz 🤙</p>
        <button
          className="launch-button"
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/1R07L2JJqAhxgDv-bV92xMTGPZYvSq9YKnr9HjBzYqnY/prefill",
              "_blank"
            );
          }}
          onMouseDown={(e) => {
            e.target.style.transform = "translateY(2px)";
            e.target.style.boxShadow = "0 2px #000";
          }}
          onMouseUp={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px #000";
          }}
        >
          help us launch
        </button>
      </div>
      <div className="image-container">
        <img
          src="/thumbsUp.png"
          alt="Background Stars"
          className="background-stars"
        />
        <img src="/zigzag.png" alt="Zigzag" className="zigzag" />
        <img src="/circle.png" alt="Circle" className="circle" />
        <img
          src="/campusHero.png"
          alt="Campus Characters"
          className="campusHero"
        />
      </div>
      <Footer />
    </div>
  );
};

export default CampusPage;
