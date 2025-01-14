import React, { useEffect, useState } from "react";

const LeftSection = () => {
  const words = ["Discover", "Connect", "Create", "Grow"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4160);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="left-section">
      <div className="left-section-padding"> 
        <h1>
          The Coolest Way <br />
          to
          <div className="vertical-flip-container">
            <span key={currentIndex} className="word">
              {words[currentIndex]}
            </span>
          </div>
        </h1> 
        <p>
          Not just another app—Blox is your campus sidekick for friends, fun,
          and growth!
        </p>
        <a className="app-buttons">
          <div className="button-content">
            <div className="icon">
              <img
                src="/playstore.png"
                className="button-icon"
                alt="playStore"
              />
            </div>
            <div className="button-text">
              <span className="button-text-small">GET IT ON</span>
              <span className="button-text-large">Google Play</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LeftSection;
