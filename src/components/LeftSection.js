const LeftSection = () => {
  return (
    <div className="left-section">
      <div className="left-section-padding">
        <h1>
          Your Playful <br />
          Social Playground
        </h1>
        <p>
          Where anonymity meets connection - dive into exclusive communities,
          make new friends, and discover your vibe!
        </p>
        <div className="buttons">
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
          <a className="app-buttons">
            <div className="button-content">
              <div className="icon">
                <img src="/apple.png" className="button-icon" alt="appleStore" />
              </div>
              <div className="button-text">
                <span className="button-text-small">GET IT ON</span>
                <span className="button-text-large">App Store</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};


export default LeftSection;