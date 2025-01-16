import React from "react";

const LeftSection = () => {
  return (
    <div className="left-section">
      <div className="left-section-padding">
        <h1>
          Your Private College <br />
          Community
        </h1>
        <p>The ultimate campus hangout—meet, vibe, and thrive together.</p>
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
